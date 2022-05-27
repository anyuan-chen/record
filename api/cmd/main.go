package main

import (
	"net/http"

	"github.com/anyuan-chen/record/api/pkg/api"
)
func main(){
	service := api.NewService()

	http.HandleFunc("/login", service.SpotifyLogin)
	http.HandleFunc("/callback", service.SpotifyCallback)
	http.ListenAndServe(":8080", nil)
}
