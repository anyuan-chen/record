package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/anyuan-chen/record/api/pkg/api"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	"google.golang.org/grpc"
)
func main(){
	service := api.NewService()
	core_logic, err := grpc.Dial("localhost:7070", grpc.WithInsecure())
	if (err != nil){
		log.Fatal(err)
	}
	client := session_manager_pb.NewSessionManagerClient(core_logic)
	fmt.Print(client)
	http.HandleFunc("/login", service.SpotifyLogin)
	http.HandleFunc("/callback", service.SpotifyCallback)
	http.ListenAndServe(":8080", nil)
}
