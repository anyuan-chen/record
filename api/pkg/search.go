package api

import (
	"context"
	"net/http"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

type SearchParams struct {
	Query     string
	QueryType []string
	Token     *core_pb.Token
}

func (s *HttpService) Search(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("query")
	queryType := r.URL.Query()["queryType[]"]
	session_id_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	session_id := session_id_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	searchParams := SearchParams{
		Query:     query,
		QueryType: queryType,
		Token:     session_token,
	}
	resp, err := s.Core_service.Search(context.Background(), &core_pb.QueryWithToken{Query: searchParams.Query, Types: searchParams.QueryType, Token: searchParams.Token})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.Write(resp.GetData())
}
