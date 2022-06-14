package core

import (
	"context"
	"encoding/json"
	"math"
	"sort"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/image_processing_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func (c *CoreService) GetTopArtistsCollage(ctx context.Context, token_json *core_pb.Token) (*core_pb.Image, error) {
	var token *oauth2.Token
	json.Unmarshal(token_json.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	artists, err := client.CurrentUsersTopArtists(context.Background(), spotify.Limit(50))
	if err != nil {
		return nil, err
	}
	imageURLs := make([]*image_processing_pb.ImageURL, 0, len(artists.Artists))
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
			imageURLs = append(imageURLs, &image_processing_pb.ImageURL{ImageURL: artist.Images[0].URL})
		}
		if len(imageURLs) == 24 {
			break
		}
	}
	for len(imageURLs) < 24 {
		imageURLs = append(imageURLs, &image_processing_pb.ImageURL{ImageURL: "filler url here"})
	}
	imageRequestData := &image_processing_pb.Images{Images: imageURLs, RowCount: 1, ColCount: 3}
	encoded_image, err := c.ImageGeneratorClient.GetCollage(context.Background(), imageRequestData)
	if err != nil {
		return nil, err
	}
	return &core_pb.Image{Image: encoded_image.Image}, nil
}
func (c *CoreService) GetTopAlbumsCollage(ctx context.Context, token_json *core_pb.Token) (*core_pb.Image, error) {
	return &core_pb.Image{}, nil
}

// rpc GetTopArtistsCollage(Token) returns (Image){}
// 	rpc GetTopAlbumsCollage(Token) returns (Image){}
