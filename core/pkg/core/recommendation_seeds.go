package core

import (
	"context"
	"encoding/json"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func DefaultSeedProfile(c *CoreService, token *oauth2.Token) (spotify.Seeds, error) {
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	artists, err := client.CurrentUsersTopArtists(context.Background(), spotify.Limit(5))
	if err != nil {
		return spotify.Seeds{}, err
	}
	artists_id := make([]spotify.ID, 0, 5)
	for i := 0; i < len(artists.Artists) && i < 2; i++ {
		artists_id = append(artists_id, artists.Artists[i].ID)
	}

	tracks, err := client.CurrentUsersTopTracks(context.Background(), spotify.Limit(5))
	if err != nil {
		return spotify.Seeds{}, err
	}
	tracks_id := make([]spotify.ID, 0, 5)
	for i := 0; i < len(tracks.Tracks) && i < 2; i++ {
		tracks_id = append(tracks_id, tracks.Tracks[i].ID)
	}
	token_json, err := json.Marshal(token)
	if err != nil {
		return spotify.Seeds{}, err
	}
	var genres []GenreWithFrequency
	genres_json, err := c.GetTopGenres(context.Background(), &core_pb.Token{Token: token_json})
	if err != nil {
		return spotify.Seeds{}, err
	}
	err = json.Unmarshal(genres_json.Data, &genres)
	if err != nil {
		return spotify.Seeds{}, err
	}
	genres_id := make([]string, 0, 5)
	for i := 0; i < len(genres) && i < 1; i++ {
		genres_id = append(genres_id, genres[i].Genre)
	}

	recommendation_seeds := spotify.Seeds{
		Artists: artists_id,
		Tracks:  tracks_id,
		Genres:  genres_id,
	}

	return recommendation_seeds, nil
}
