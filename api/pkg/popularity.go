package api

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

func (s *HttpService) AveragePopularity(w http.ResponseWriter, r *http.Request) {
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, "invalid session id", http.StatusBadRequest)
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, "no session exists", http.StatusBadRequest)
	}
	resp, err := s.Core_service.GetPopularityScore(context.Background(), session_token)
	if err != nil {
		http.Error(w, "grpc fail: "+err.Error(), http.StatusBadRequest)
	}
	popularity_json, err := json.Marshal(resp.GetScore())
	if err != nil {
		http.Error(w, "failed to encode"+err.Error(), http.StatusBadRequest)
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(popularity_json)

}
