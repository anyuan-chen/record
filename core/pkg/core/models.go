package core

import (
	//"image"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"golang.org/x/oauth2"
)
type Core interface {
	GetTopArtists(numberOfArtists int, token oauth2.Token) ([]byte, error)
	GetTopSongs(numberOfSongs int, token oauth2.Token) ([]byte, error)
	GetTopGenres(numberOfGenres int, token oauth2.Token) ([]byte, error)

	// GetTopArtistsCollage(token oauth2.Token) (image.Image, error)
	// GetTopAlbumsCollage(token oauth2.Token) (image.Image, error)

	GetRecommendations(token oauth2.Token) ([]byte, error)
	MakeRecommendationsPlaylist(token oauth2.Token) error

	// GetPopularityScore(token oauth2.Token) (float64, error)
}
type CoreService struct {
	Authenticator *spotifyauth.Authenticator
	core_pb.UnimplementedCoreManagerServer
}
type GenreWithFrequency struct {
	frequency int
	genre string
}


