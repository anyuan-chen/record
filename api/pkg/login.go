package api

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"net/http"
	"os"
	"time"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
)

//genrates new set of credentials for spotify with the private/public key
var scopes = spotifyauth.WithScopes(spotifyauth.ScopeUserReadPrivate, spotifyauth.ScopeUserTopRead, spotifyauth.ScopeUserLibraryModify, spotifyauth.ScopePlaylistModifyPublic, spotifyauth.ScopePlaylistModifyPrivate, spotifyauth.ScopeUserLibraryRead)
var auth = spotifyauth.New(spotifyauth.WithRedirectURL(os.Getenv("REDIRECT_URL")), scopes)

func (s *HttpService) SpotifyLogin(w http.ResponseWriter, r *http.Request) {
	expiration := time.Now().Add(20 * time.Minute)
	state := make(map[string]interface{})
	randomizedState := make([]byte, 16)
	rand.Read(randomizedState)
	state["random"] = randomizedState
	json, err := json.Marshal(state)
	if err != nil {
		http.Error(w, "A JSON Encoding error has been encountered.", http.StatusInternalServerError)
	}
	encoded_json := base64.URLEncoding.EncodeToString(json)
	url := auth.AuthURL(encoded_json)
	cookie := http.Cookie{Name: "oauthstate", Value: encoded_json, Expires: expiration}
	http.SetCookie(w, &cookie)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}

func (s *HttpService) SpotifyCallback(w http.ResponseWriter, r *http.Request) {
	state, err := r.Cookie("oauthstate")
	if err != nil || r.FormValue("state") != state.Value {
		http.Error(w, "Bad OAuth State", http.StatusInternalServerError)
	}
	token, err := auth.Token(r.Context(), state.Value, r)
	if err != nil {
		http.Error(w, "Failed to Retrieve Token", http.StatusInternalServerError)
	}

	token_json, err := json.Marshal(token)

	if err != nil {
		http.Error(w, "Error encoding JSON token", http.StatusInternalServerError)
	}
	session_id, err := s.Session_manager.CreateSession(context.Background(), &core_pb.Token{Token: token_json})

	if err != nil {
		http.Error(w, "Problem with the session management service: "+err.Error(), http.StatusInternalServerError)
	}
	cookie := http.Cookie{Name: "session_id", Value: session_id.Code, SameSite: http.SameSiteNoneMode, Secure: true}
	http.SetCookie(w, &cookie)
	http.Redirect(w, r, os.Getenv("FRONTEND_URL")+"/dashboard", http.StatusPermanentRedirect)
}
