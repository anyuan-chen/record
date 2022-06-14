package main

import (
	"log"
	"net/http"

	api "github.com/anyuan-chen/record/api/pkg"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	session_manager, err := grpc.Dial("localhost:7070", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	session_client := session_manager_pb.NewSessionManagerClient(session_manager)

	core_manager, err := grpc.Dial("localhost:6060", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	core_client := core_pb.NewCoreManagerClient(core_manager)

	service := api.NewService(session_client, core_client)
	http.HandleFunc("/login", service.SpotifyLogin)
	http.HandleFunc("/callback", service.SpotifyCallback)
	http.HandleFunc("/gettopartists", service.TopArtists)
	http.HandleFunc("/gettopsongs", service.TopSongs)
	http.HandleFunc("/gettopgenres", service.TopGenres)
	http.HandleFunc("/getrecommendedsongs", service.RecommendedSongs)
	http.HandleFunc("/makerecommendedplaylist", service.MakeRecommendedPlaylist)
	http.ListenAndServe(":8080", nil)
}
