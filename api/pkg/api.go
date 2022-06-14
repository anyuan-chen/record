package api

import (
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

//data type which fulfils the API needed to interface with the record app
type HttpService struct {
	Session_manager session_manager_pb.SessionManagerClient
	Core_service    core_pb.CoreManagerClient
}

//returns instance of service with neecessary parameters
func NewService(session_manager session_manager_pb.SessionManagerClient, core_service core_pb.CoreManagerClient) HttpService {
	return HttpService{Session_manager: session_manager, Core_service: core_service}
}

// type HttpService interface {
// 	TopArtists(w http.ResponseWriter, r *http.Request)
// 	TopSongs(w http.ResponseWriter, r *http.Request)
// 	TopGenres(w http.ResponseWriter, r *http.Request)

// 	SongCollage(w http.ResponseWriter, r *http.Request)
// 	ArtistCollage(w http.ResponseWriter, r *http.Request)

// 	AveragePopularity(w http.ResponseWriter, r *http.Request)
// 	RecommendedSongs(w http.ResponseWriter, r *http.Request)
// 	MakePlaylist(w http.ResponseWriter, r *http.Request)

// 	SpotifyLogin(w http.ResponseWriter, r *http.Request)   login route
// 	SpotifyCallback(w http.ResponseWriter, r *http.Request)  login route
// }
