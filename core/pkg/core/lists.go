package core

import (
	"context"
	"encoding/json"
	"fmt"
	"sort"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

// type CoreManagerServer interface {
// 	GetTopArtists(context.Context, *NumberWithToken) (*JSONResponse, error)
// 	GetTopSongs(context.Context, *NumberWithToken) (*JSONResponse, error)
// 	GetTopGenres(context.Context, *Token) (*JSONResponse, error)
// 	mustEmbedUnimplementedCoreManagerServer()
// }

func (c *CoreService) GetTopArtists(ctx context.Context, artist *core_pb.NumberWithToken) (*core_pb.JSONResponse, error) {
	numberOfArtists := artist.Number.Number
	var token = &oauth2.Token{}
	err := json.Unmarshal(artist.Token.Token, token)
	if err != nil {
		return nil, err
	}
	fmt.Println(token.RefreshToken)
	httpClient := c.Authenticator.Client(context.Background(), token)
	client := spotify.New(httpClient)
	fullArtistPage, err := client.CurrentUsersTopArtists(context.Background(), spotify.Limit(int(numberOfArtists)))
	if err != nil {
		return nil, err
	}
	artists_json, err := json.Marshal(fullArtistPage.Artists)
	if err != nil {
		return nil, err
	}
	return &core_pb.JSONResponse{Data: artists_json}, nil
}

func (c *CoreService) GetTopSongs(ctx context.Context, track *core_pb.NumberWithToken) (*core_pb.JSONResponse, error) {
	numberOfSongs := track.Number.Number
	var token = &oauth2.Token{}
	json.Unmarshal(track.Token.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	fullSongsPage, err := client.CurrentUsersTopTracks(context.Background(), spotify.Limit(int(numberOfSongs)))
	if err != nil {
		return nil, err
	}
	songs_json, err := json.Marshal(fullSongsPage.Tracks)
	if err != nil {
		return nil, err
	}
	return &core_pb.JSONResponse{Data: songs_json}, nil
}

func (c *CoreService) GetTopGenres(ctx context.Context, token_json *core_pb.Token) (*core_pb.JSONResponse, error) {
	var token = &oauth2.Token{}
	json.Unmarshal(token_json.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	fullSongsPage, err := client.CurrentUsersTopTracks(context.Background(), spotify.Limit(50))
	if err != nil {
		return nil, err
	}
	genreFrequency := make(map[string]int)
	for _, track := range fullSongsPage.Tracks {
		artists := track.Artists
		for _, artist := range artists {
			fullArtist, err := client.GetArtist(context.Background(), artist.ID)
			if err != nil {
				return nil, err
			}
			for _, genre := range fullArtist.Genres {
				genreFrequency[genre]++
			}
		}
		if err != nil {
			return nil, err
		}
	}
	//fmt.Print(genreFrequency)
	topGenres := make([]GenreWithFrequency, 0, len(genreFrequency))
	for key, value := range genreFrequency {
		topGenres = append(topGenres, GenreWithFrequency{Frequency: value, Genre: key})
	}
	sort.Slice(topGenres, func(i, j int) bool {
		return topGenres[i].Frequency > topGenres[j].Frequency
	})
	topGenres_json, err := json.Marshal(topGenres)
	fmt.Print(topGenres)
	if err != nil {
		return nil, err
	}
	return &core_pb.JSONResponse{Data: topGenres_json}, nil
}
