package core

import (
	"context"
	"encoding/json"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func (c *CoreService) GetRecommendedSongs(ctx context.Context, number_with_token *core_pb.NumberWithToken) (*core_pb.JSONResponse, error) {
	numberOfSongs := number_with_token.Number.Number
	var token *oauth2.Token
	json.Unmarshal(number_with_token.Token.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	recommendation_seeds, err := DefaultSeedProfile(c, token)
	if err != nil {
		return nil, err
	}
	var track_attributes = spotify.TrackAttributes{}
	recommended_songs, err := client.GetRecommendations(context.Background(), recommendation_seeds, &track_attributes, spotify.Limit(int(numberOfSongs)))
	if err != nil {
		return nil, err
	}
	recommended_songs_json, err := json.Marshal(recommended_songs)
	if err != nil {
		return nil, err
	}
	return &core_pb.JSONResponse{Data: recommended_songs_json}, nil
}

func (c *CoreService) MakeRecommendedPlaylist(ctx context.Context, token_json *core_pb.Token) (*core_pb.Empty, error) {
	var token *oauth2.Token
	json.Unmarshal(token_json.Token, token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	user_id, err := client.CurrentUser(context.Background())
	if err != nil {
		return nil, err
	}
	playlist_title := "Records Recommendations"
	playlist_desc := "probably filtered to your taste. no guarantees"
	playlist, err := client.CreatePlaylistForUser(context.Background(), user_id.ID, playlist_title, playlist_desc, false, false)
	if err != nil {
		return nil, err
	}
	recommendation_seeds, err := DefaultSeedProfile(c, token)
	if err != nil {
		return nil, err
	}
	var track_attributes = spotify.TrackAttributes{}
	recommended_songs, err := client.GetRecommendations(context.Background(), recommendation_seeds, &track_attributes, spotify.Limit(50))
	if err != nil {
		return nil, err
	}
	playlist_items := make([]spotify.ID, 0, len(recommended_songs.Tracks))
	for _, track := range recommended_songs.Tracks {
		playlist_items = append(playlist_items, spotify.ID(track.URI))
	}
	_, err = client.AddTracksToPlaylist(context.Background(), playlist.ID, playlist_items...)
	if err != nil {
		return nil, err
	}
	return &core_pb.Empty{}, nil
}
