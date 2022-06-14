package api

import (
	"context"
	"fmt"
	"net/http"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

func (s *HttpService) TopArtists(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, "invalid session id", http.StatusBadRequest)
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
	}
	//fmt.Print(session_token)
	number_and_token := core_pb.NumberWithToken{Number: &core_pb.Number{Number: 5}, Token: session_token}
	fmt.Print(&number_and_token)
	resp, err := s.Core_service.GetTopArtists(context.Background(), &number_and_token)
	if err != nil {
		http.Error(w, "grpc call failed T_T"+err.Error(), http.StatusBadRequest)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}

func (s *HttpService) TopSongs(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, "invalid session id", http.StatusBadRequest)
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
	}
	number_and_token := core_pb.NumberWithToken{Number: &core_pb.Number{Number: 5}, Token: session_token}
	resp, err := s.Core_service.GetTopSongs(context.Background(), &number_and_token)
	if err != nil {
		http.Error(w, "grpc call failed T_T"+err.Error(), http.StatusBadRequest)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}

func (s *HttpService) TopGenres(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, "invalid session id", http.StatusBadRequest)
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
	}
	resp, err := s.Core_service.GetTopGenres(context.Background(), session_token)
	if err != nil {
		http.Error(w, "grpc call failed T_T"+err.Error(), http.StatusBadRequest)
	}
	fmt.Print(resp)
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}

// type HttpService interface {
// 	TopArtists(w http.ResponseWriter, r *http.Request)
// 	TopSongs(w http.ResponseWriter, r *http.Request)
// 	TopGenres(w http.ResponseWriter, r *http.Request)

// 	SongCollage(w http.ResponseWriter, r *http.Request)
// 	ArtistCollage(w http.ResponseWriter, r *http.Request)

// 	AveragePopularity(w http.ResponseWriter, r *http.Request)
// 	RecommendedSongs(w http.ResponseWriter, r *http.Request)
// 	MakeRecommendedPlaylist(w http.ResponseWriter, r *http.Request)

// 	SpotifyLogin(w http.ResponseWriter, r *http.Request)   login route
// 	SpotifyCallback(w http.ResponseWriter, r *http.Request)  login route
// }
