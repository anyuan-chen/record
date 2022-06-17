package core

import (
	//"image"

	"image"

	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"golang.org/x/oauth2"
)

type Core interface {
	GetTopArtists(numberOfArtists int, token oauth2.Token) ([]byte, error)
	GetTopSongs(numberOfSongs int, token oauth2.Token) ([]byte, error)
	GetTopGenres(numberOfGenres int, token oauth2.Token) ([]byte, error)

	GetTopArtistsCollage(token oauth2.Token) (image.Image, error)
	GetTopAlbumsCollage(token oauth2.Token) (image.Image, error)

	GetRecommendations(token oauth2.Token) ([]byte, error)
	MakeRecommendationsPlaylist(token oauth2.Token) error

	GetPopularityScore(token oauth2.Token) (float64, error)
}
type CoreService struct {
	Authenticator          *spotifyauth.Authenticator
	CollageGeneratorClient collage_maker_pb.ImageProcessorClient
	core_pb.UnimplementedCoreManagerServer
}
type GenreWithFrequency struct {
	Frequency int    `json:"frequency"`
	Genre     string `json:"genre"`
}
