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
	// img, _, err := image.Decode(bytes.NewReader(resp.GetImage()))
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// }
	// out, _ := os.Create("./temp.png")
	// defer out.Close()
	// err = png.Encode(out, img)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// }
	// fileBytes, err := ioutil.ReadFile("./temp.png")
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/octet-stream")
	w.Write(resp.GetImage())
}
