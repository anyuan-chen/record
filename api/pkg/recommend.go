package api

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

func (s *HttpService) RecommendedSongs(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, "invalid session id", http.StatusBadRequest)
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
	}
	number_with_token := &core_pb.NumberWithToken{Number: &core_pb.Number{Number: 5}, Token: session_token}
	resp, err := s.Core_service.GetRecommendedSongs(context.Background(), number_with_token)
	if err != nil {
		http.Error(w, "grpc call failed"+err.Error(), http.StatusBadRequest)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}
func (s *HttpService) MakeRecommendedPlaylist(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, "invalid session id", http.StatusBadRequest)
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
	}
	_, err = s.Core_service.MakeRecommendedPlaylist(context.Background(), session_token)
	w.Header().Set("Content-Type", "application/json")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		faliure, _ := json.Marshal(false)
		w.Write(faliure)
	} else {
		success, _ := json.Marshal(true)
		w.Write(success)
	}
}
