package main

import (
	"log"
	"net"

	"github.com/anyuan-chen/record/collage_maker/pkg/collage_maker"
	"github.com/anyuan-chen/record/proto/pkg/collage_maker_pb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	lis, err := net.Listen("tcp", ":5050")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	collage_maker_pb.RegisterImageProcessorServer(grpcServer, &collage_maker.Collage_Maker_Server{})
	reflection.Register(grpcServer)
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("fail %v", err)
	}
}
