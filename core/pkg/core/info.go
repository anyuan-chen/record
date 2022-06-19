package core

import (
	"context"
	"encoding/json"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func (c *CoreService) GetSongInfo(ctx context.Context, track *core_pb.IDWithToken) (*core_pb.JSONResponse, error) {
	var token = &oauth2.Token{}
	json.Unmarshal(track.GetToken().Token, token)
	id := track.Id
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	resp, err := client.GetTrack(context.Background(), spotify.ID(id))
	if err != nil {
		return nil, err
	}
	resp_json, err := json.Marshal(resp)
	if err != nil {
		return nil, err
	}
	return &core_pb.JSONResponse{Data: resp_json}, nil
}
func (c *CoreService) GetSongAudioFeatures(ctx context.Context, track *core_pb.IDWithToken) (*core_pb.JSONResponse, error) {
	var token = &oauth2.Token{}
	json.Unmarshal(track.GetToken().Token, token)
	id := track.Id
	client := spotify.New(c.Authenticator.Client(context.Background(), token))
	resp, err := client.GetAudioFeatures(context.Background(), spotify.ID(id))
	if err != nil {
		return nil, err
	}
	resp_json, err := json.Marshal(resp)
	if err != nil {
		return nil, err
	}
	return &core_pb.JSONResponse{Data: resp_json}, nil
}