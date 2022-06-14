package core

import (
	"context"
	"encoding/json"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func (c *CoreService) GetPopularityScore(ctx context.Context, token_json *core_pb.Token) (*core_pb.FloatScore, error) {
	var token = &oauth2.Token{}
	json.Unmarshal(token_json.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	tracks, err := client.CurrentUsersTopTracks(context.Background(), spotify.Limit(50))
	if err != nil {
		return nil, err
	}
	var average float64 = 0
	for _, track := range tracks.Tracks {
		average += float64(track.Popularity)
	}
	average = average / (float64(len(tracks.Tracks)))
	return &core_pb.FloatScore{Score: average}, nil
}
