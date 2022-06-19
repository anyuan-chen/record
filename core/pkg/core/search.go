package core

import (
	"context"
	"encoding/json"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func (c *CoreService) Search(ctx context.Context, query_with_token *core_pb.QueryWithToken) (*core_pb.JSONResponse, error) {
	var token *oauth2.Token
	json.Unmarshal(query_with_token.Token.Token, &token)
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	query := query_with_token.Query
	types := query_with_token.Types
	var queryTypes spotify.SearchType
	for _, queryType := range types {
		switch queryType {
		case "artist":
			queryTypes = queryTypes | spotify.SearchTypeArtist
		case "track":
			queryTypes = queryTypes | spotify.SearchTypeTrack
		case "album":
			queryTypes = queryTypes | spotify.SearchTypeAlbum
		case "playlist":
			queryTypes = queryTypes | spotify.SearchTypePlaylist
		}
	}
	searchResult, err := client.Search(context.Background(), query, queryTypes, spotify.Limit(8))
	if err != nil {
		return nil, err
	}
	search_result_json, err := json.Marshal(searchResult)
	if err != nil {
		return nil, err
	}
	return &core_pb.JSONResponse{Data: search_result_json}, nil
}
