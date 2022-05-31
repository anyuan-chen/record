package main

import (
	"log"
	"net/http"

	api "github.com/anyuan-chen/record/api/pkg"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	session_manager, err := grpc.Dial("localhost:7070", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	client := session_manager_pb.NewSessionManagerClient(session_manager)
	service := api.NewService(client)
	http.HandleFunc("/login", service.SpotifyLogin)
	http.HandleFunc("/callback", service.SpotifyCallback)
	http.ListenAndServe(":8080", nil)
}
