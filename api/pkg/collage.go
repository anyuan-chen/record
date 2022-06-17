package api

import (
	"context"
	"net/http"

	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

func (s *HttpService) ArtistCollage(w http.ResponseWriter, r *http.Request) {
	session_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	session_id := session_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	resp, err := s.Core_service.GetTopArtistsCollage(context.Background(), session_token)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "image/jpeg")
	w.Write(resp.GetImage())
}
