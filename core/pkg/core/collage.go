package core

import (
	"context"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
)


func (c *CoreService) GetTopArtistsCollage(ctx context.Context, token_json *core_pb.Token) (*core_pb.Image, error){
	return &core_pb.Image{}, nil
}
func (c *CoreService) GetTopAlbumsCollage(ctx context.Context, token_json *core_pb.Token) (*core_pb.Image, error){
	return &core_pb.Image{}, nil
}



// rpc GetTopArtistsCollage(Token) returns (Image){}
// 	rpc GetTopAlbumsCollage(Token) returns (Image){}