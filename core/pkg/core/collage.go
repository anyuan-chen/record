package core

import (
	"context"
	"encoding/json"
	"math"
	"math/rand"
	"sort"
	"time"

	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func (c *CoreService) GetTopArtistsCollage(ctx context.Context, info_and_token *core_pb.CollageInfoAndToken) (*core_pb.Image, error) {
	var token = &oauth2.Token{}
	json.Unmarshal(info_and_token.Token.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	artists, err := client.CurrentUsersTopArtists(context.Background(), spotify.Limit(50))
	if err != nil {
		return nil, err
	}
	imageURLs := make([]*collage_maker_pb.ImageURL, 0, len(artists.Artists))
	for _, artist := range artists.Artists {
		sort.Slice(artist.Images, func(i, j int) bool {
			whDiffI := int(math.Abs(float64(artist.Images[i].Width - artist.Images[i].Height)))
			whDiffJ := int(math.Abs(float64(artist.Images[j].Width - artist.Images[j].Height)))
			if whDiffI < whDiffJ {
				return true
			} else if whDiffI == whDiffJ {
				return artist.Images[i].Width < artist.Images[j].Width
			} else {
				return false
			}
		})
		if len(artist.Images) != 0 {
			imageURLs = append(imageURLs, &collage_maker_pb.ImageURL{ImageURL: artist.Images[0].URL})
		}
		if len(imageURLs) == int(info_and_token.Cols)*int(info_and_token.Rows) {
			break
		}
	}
	collageParameters := &collage_maker_pb.Images{
		Images:     imageURLs,
		RowCount:   info_and_token.Rows,
		ColCount:   info_and_token.Cols,
		TargetSize: info_and_token.Size,
	}
	resp, err := c.CollageGeneratorClient.GetCollage(context.Background(), collageParameters)
	if err != nil {
		return nil, err
	}
	return &core_pb.Image{Image: resp.GetImage()}, nil
}

func (c *CoreService) GetRandomTopArtistsCollage(ctx context.Context, info_and_token *core_pb.CollageInfoAndToken) (*core_pb.Image, error) {
	var token = &oauth2.Token{}
	json.Unmarshal(info_and_token.Token.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	artists, err := client.CurrentUsersTopArtists(context.Background(), spotify.Limit(50))
	if err != nil {
		return nil, err
	}
	imageURLs := make([]*collage_maker_pb.ImageURL, 0, len(artists.Artists))
	for _, artist := range artists.Artists {
		sort.Slice(artist.Images, func(i, j int) bool {
			whDiffI := int(math.Abs(float64(artist.Images[i].Width - artist.Images[i].Height)))
			whDiffJ := int(math.Abs(float64(artist.Images[j].Width - artist.Images[j].Height)))
			if whDiffI < whDiffJ {
				return true
			} else if whDiffI == whDiffJ {
				return artist.Images[i].Width < artist.Images[j].Width
			} else {
				return false
			}
		})

	}
	rand.Seed(time.Now().Unix())
	rand.Shuffle(len(artists.Artists), func(i, j int) {
		artists.Artists[i], artists.Artists[j] = artists.Artists[j], artists.Artists[i]
	})
	for i := 0; i < int(info_and_token.GetRows())*int(info_and_token.GetCols()); i++ {
		imageURLs = append(imageURLs, &collage_maker_pb.ImageURL{ImageURL: artists.Artists[i].Images[0].URL})
	}
	collageParameters := &collage_maker_pb.Images{
		Images:     imageURLs,
		RowCount:   info_and_token.Rows,
		ColCount:   info_and_token.Cols,
		TargetSize: info_and_token.Size,
	}
	resp, err := c.CollageGeneratorClient.GetCollage(context.Background(), collageParameters)
	if err != nil {
		return nil, err
	}
	return &core_pb.Image{Image: resp.GetImage()}, nil
}

func (c *CoreService) GetTopAlbumsCollage(ctx context.Context, info_and_token *core_pb.CollageInfoAndToken) (*core_pb.Image, error) {
	return &core_pb.Image{}, nil
}

// rpc GetTopArtistsCollage(Token) returns (Image){}
// 	rpc GetTopAlbumsCollage(Token) returns (Image){}
