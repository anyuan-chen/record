package collage_maker

import (
	"bytes"
	"context"
	"image/jpeg"

	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
)

type Collage_Maker_Server struct {
	collage_maker_pb.UnimplementedImageProcessorServer
}

func (c *Collage_Maker_Server) GetCollage(ctx context.Context, images *collage_maker_pb.Images) (*core_pb.Image, error) {
	convertedImages, err := GetImagesFromUrls(images)
	if err != nil {
		return nil, err
	}
	collage := CreateCollage(int(images.RowCount), int(images.ColCount), convertedImages, int(images.TargetSize), int(images.TargetSize))

	buf := new(bytes.Buffer)
	err = jpeg.Encode(buf, collage, nil)
	if err != nil {
		return nil, err
	}

	return &core_pb.Image{Image: buf.Bytes()}, nil
}
