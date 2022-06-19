package api

import (
	"context"
	"net/http"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

func (s *HttpService) SongInfo(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	id := r.URL.Query().Get("id")
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	resp, err := s.Core_service.GetSongInfo(context.Background(), &core_pb.IDWithToken{Id: id, Token: session_token})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}

func (s *HttpService) SongAudioFeatures(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	id := r.URL.Query().Get("id")
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	resp, err := s.Core_service.GetSongAudioFeatures(context.Background(), &core_pb.IDWithToken{Id: id, Token: session_token})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}
