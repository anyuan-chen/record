package http

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	spotifyauth "github.com/zmb3/spotify/v2/auth"
)

var auth = spotifyauth.New(spotifyauth.WithRedirectURL(os.Getenv("redirectURL")), spotifyauth.WithScopes(spotifyauth.ScopeUserReadPrivate))


func (s *HttpService) SpotifyLogin(w http.ResponseWriter, r *http.Request){
	expiration := time.Now().Add(20 * time.Minute)
	state := make(map[string]interface{})
	randomizedState := make([]byte, 16)
	rand.Read(randomizedState)
	state["random"] = randomizedState;
	json, err := json.Marshal(state);
	if err != nil {
		http.Error(w, "A JSON Encoding error has been encountered.", http.StatusInternalServerError)
	}
	encoded_json := base64.URLEncoding.EncodeToString(json)
	url := auth.AuthURL(encoded_json)
	cookie := http.Cookie{Name: "oauthstate", Value: encoded_json, Expires: expiration}
	http.SetCookie(w, &cookie)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}

func (s *HttpService) SpotifyCallback(w http.ResponseWriter, r *http.Request){
	state, err := r.Cookie("oauthstate")
	if err != nil || r.FormValue("state") != state.Value {
		http.Error(w, "Bad OAuth State", http.StatusInternalServerError)
	}
	token, err := auth.Token(r.Context(), state.Value, r)
	if err != nil {
		http.Error(w, "Failed to Retrieve Token", http.StatusInternalServerError)
	}
	fmt.Print(token)
	//need to save this token somewhere  and process it
	
	//client := spotify.New(auth.Client(r.Context(), token))
	http.Redirect(w, r, os.Getenv("FRONTEND_URL") + "/dashboard", http.StatusPermanentRedirect)
}
