package main

import (
	"log"
	"net"
	"os"

	"github.com/anyuan-chen/record/core/pkg/core"
	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	lis, err := net.Listen("tcp", ":6060")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	auth := spotifyauth.New(spotifyauth.WithRedirectURL(os.Getenv("REDIRECT_URL")), spotifyauth.WithScopes(spotifyauth.ScopeUserReadPrivate))

	collage_processing_client, err := grpc.Dial("localhost:4040", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer collage_processing_client.Close()
	image_processing_client := collage_maker_pb.NewImageProcessorClient(collage_processing_client)
	service := core.CoreService{Authenticator: auth, CollageGeneratorClient: image_processing_client}
	core_pb.RegisterCoreManagerServer(grpcServer, &service)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("fail %v", err)
	}
}
