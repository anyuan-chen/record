package api

import "github.com/anyuan-chen/record/proto/pkg/session_manager_pb"

type HttpService struct {
	Session_manager session_manager_pb.SessionManagerClient
}
func NewService(session_manager session_manager_pb.SessionManagerClient) HttpService{
	return HttpService{Session_manager: session_manager }
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