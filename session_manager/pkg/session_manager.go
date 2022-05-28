package session_manager

import (
	"context"

	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	"github.com/google/uuid"
	"google.golang.org/protobuf/proto"
)

type Session_manager_server struct {
	session_table map[string]*session_manager_pb.Token
	session_manager_pb.UnimplementedSessionManagerServer
}

func (s *Session_manager_server) CreateSession(ctx context.Context, token *session_manager_pb.Token) (*session_manager_pb.SessionID, error){
	var uid string
	for {
		uid = uuid.New().String()
		if !proto.Equal(token, &session_manager_pb.Token{Token: nil}){
			continue;
		} else {
			break;
		}
	}
	s.session_table[uid] = token;
	return &session_manager_pb.SessionID{Code: uid}, nil;
}


// protoc -I=. --go_out=../core_logic/pkg/session_manager/pb --go_opt=paths=source_relative \
// --go-grpc_out=../core_logic/pkg/session_manager/pb --go-grpc_opt=paths=source_relative \
// session_manager.proto 