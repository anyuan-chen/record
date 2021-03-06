package main

import (
	"log"
	"net"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	session_manager "github.com/anyuan-chen/record/session_manager/pkg/session_manager"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)


func main(){
	lis, err := net.Listen("tcp", ":7070")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	session_table := make(map[string]*core_pb.Token)
	session_manager_pb.RegisterSessionManagerServer(grpcServer, &session_manager.Session_manager_server{Session_table: session_table})
	reflection.Register(grpcServer)
	if err:= grpcServer.Serve(lis); err != nil {
		log.Fatalf("fail %v", err);
	}
}