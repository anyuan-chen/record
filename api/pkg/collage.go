package api

import (
	"context"
	"net/http"
	"strconv"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
)

type CollageParams struct {
	Rows   int64
	Cols   int64
	Size   int64
	Random bool
}

func (s *HttpService) ArtistCollage(w http.ResponseWriter, r *http.Request) {
	session_cookie, err := r.Cookie("session_id")
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
		return
	}
	var collageParams CollageParams
	rows, _ := strconv.ParseInt(r.URL.Query().Get("rows"), 10, 64)
	cols, _ := strconv.ParseInt(r.URL.Query().Get("cols"), 10, 64)
	size, _ := strconv.ParseInt(r.URL.Query().Get("size"), 10, 64)
	random, err := strconv.ParseBool(r.URL.Query().Get("random"))
	collageParams = CollageParams{
		Rows:   rows,
		Cols:   cols,
		Size:   size,
		Random: random,
	}
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	session_id := session_cookie.Value
	session_token, err := s.Session_manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: session_id})
	if err != nil {
		http.Error(w, err.Error(), http.StatusUnauthorized)
	}
	assembledCollageParams := &core_pb.CollageInfoAndToken{
		Token: session_token,
		Rows:  int64(collageParams.Rows),
		Cols:  int64(collageParams.Cols),
		Size:  int64(collageParams.Size),
	}
	var resp *core_pb.Image
	if collageParams.Random {
		resp, err = s.Core_service.GetRandomTopArtistsCollage(context.Background(), assembledCollageParams)
	} else {
		resp, err = s.Core_service.GetTopArtistsCollage(context.Background(), assembledCollageParams)
	}
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "image/jpeg")
	w.Write(resp.GetImage())
}
