package collage_maker

import (
	"context"

	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
)

type Collage_Maker_Server struct {
	collage_maker_pb.UnimplementedImageProcessorServer
}

func (c *Collage_Maker_Server) GetCollage(ctx context.Context, images *collage_maker_pb.Images) (*core_pb.Image, error) {
	return &core_pb.Image{}, nil
}
