package collage_maker_test

import (
	"bytes"
	"context"
	"io"
	"log"
	"net"
	"os"
	"testing"

	"github.com/anyuan-chen/record/collage_maker/pkg/collage_maker"
	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/stretchr/testify/assert"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/test/bufconn"
)

const bufSize = 1024 * 1024

func init() {
	lis = bufconn.Listen(bufSize)
	s := grpc.NewServer()
	collage_maker_pb.RegisterImageProcessorServer(s, &collage_maker.Collage_Maker_Server{})
	go func() {
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Server exited with error: %v", err)
		}
	}()
}

var lis *bufconn.Listener

func bufDialer(context.Context, string) (net.Conn, error) {
	return lis.Dial()
}

func TestCreateCollage(t *testing.T) {
	ctx := context.Background()
	collage_maker, err := grpc.DialContext(ctx, "bufnet", grpc.WithContextDialer(bufDialer), grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	defer collage_maker.Close()
	Manager := collage_maker_pb.NewImageProcessorClient(collage_maker)
	sampleImageUrls := make([]*collage_maker_pb.ImageURL, 0, 4)
	for i := 0; i < 4; i++ {
		sampleImageUrls = append(sampleImageUrls, &collage_maker_pb.ImageURL{ImageURL: "https://i.scdn.co/image/ab6761610000e5eba9989f6b9885c7aedc29c557"})
	}
	sampleData := &collage_maker_pb.Images{
		RowCount:   2,
		ColCount:   2,
		TargetSize: 160,
		Images:     sampleImageUrls,
	}
	img, err := Manager.GetCollage(context.Background(), sampleData)
	assert.Nil(t, err)
	bytes := new(bytes.Buffer)
	bytes.Write(img.Image)
	file, err := os.Create("/tmp/file.jpeg")
	assert.Nil(t, err)
	defer file.Close()
	_, err = io.Copy(file, bytes)
	assert.Nil(t, err)
	assert.NotNil(t, img)
}
