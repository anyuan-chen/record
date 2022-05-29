package main

import (
	"log"
	"net"
	"os"

	"github.com/anyuan-chen/record/core/pkg/core"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"google.golang.org/grpc"
)

func main(){
	lis, err := net.Listen("tcp", "6060")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()

	auth := spotifyauth.New(spotifyauth.WithRedirectURL(os.Getenv("REDIRECT_URL")), spotifyauth.WithScopes(spotifyauth.ScopeUserReadPrivate))
	service := core.CoreService{Authenticator: auth}
	core_pb.RegisterCoreManagerServer(grpcServer, &service)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("fail %v", err);
	}
}
