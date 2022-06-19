package core

import (
	//"image"

	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
)

type CoreService struct {
	Authenticator          *spotifyauth.Authenticator
	CollageGeneratorClient collage_maker_pb.ImageProcessorClient
	core_pb.UnimplementedCoreManagerServer
}
type GenreWithFrequency struct {
	Frequency int    `json:"frequency"`
	Total     int    `json:"total"`
	Genre     string `json:"genre"`
}
