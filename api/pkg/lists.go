package api

import (
	"context"
	"fmt"
	"net/http"
	"strconv"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

type ListParams struct {
	Limit int64
}

func (s *HttpService) TopArtists(w http.ResponseWriter, r *http.Request) {
	limit, _ := strconv.ParseInt(r.URL.Query().Get("limit"), 10, 64)
	params := ListParams{
		Limit: limit,
	}
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		fmt.Println(err)
		http.Error(w, "invalid session id", http.StatusBadRequest)
		return
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
		return
	}
	//fmt.Print(session_token)
	number_and_token := core_pb.NumberWithToken{Number: &core_pb.Number{Number: params.Limit}, Token: session_token}
	fmt.Print(&number_and_token)
	resp, err := s.Core_service.GetTopArtists(context.Background(), &number_and_token)
	if err != nil {
		http.Error(w, "grpc call failed T_T"+err.Error(), http.StatusBadRequest)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}

func (s *HttpService) TopSongs(w http.ResponseWriter, r *http.Request) {
	limit, _ := strconv.ParseInt(r.URL.Query().Get("limit"), 10, 64)
	params := ListParams{
		Limit: limit,
	}
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, "invalid session id", http.StatusBadRequest)
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
	}
	number_and_token := core_pb.NumberWithToken{Number: &core_pb.Number{Number: params.Limit}, Token: session_token}
	resp, err := s.Core_service.GetTopSongs(context.Background(), &number_and_token)
	if err != nil {
		http.Error(w, "grpc call failed T_T"+err.Error(), http.StatusBadRequest)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}

func (s *HttpService) TopGenres(w http.ResponseWriter, r *http.Request) {
	limit, _ := strconv.ParseInt(r.URL.Query().Get("limit"), 10, 64)
	params := ListParams{
		Limit: limit,
	}
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

// 	TopSongCollage(w http.ResponseWriter, r *http.Request)
// 	TopArtistCollage(w http.ResponseWriter, r *http.Request)

// 	AveragePopularity(w http.ResponseWriter, r *http.Request)
// 	RecommendedSongs(w http.ResponseWriter, r *http.Request)
// 	MakeRecommendedPlaylist(w http.ResponseWriter, r *http.Request)

// 	SpotifyLogin(w http.ResponseWriter, r *http.Request)   login route
// 	SpotifyCallback(w http.ResponseWriter, r *http.Request)  login route
// }
