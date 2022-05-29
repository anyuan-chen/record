package session_manager

import (
	"context"
	"errors"

	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	"github.com/google/uuid"
	"google.golang.org/protobuf/proto"
)

type Session_manager_server struct {
	Session_table map[string]*session_manager_pb.Token
	session_manager_pb.UnimplementedSessionManagerServer
}

func (s *Session_manager_server) CreateSession(ctx context.Context, token *session_manager_pb.Token) (*session_manager_pb.SessionID, error){
	var uid string
	for {
		uid = uuid.New().String()
		if proto.Equal(token, &session_manager_pb.Token{Token: nil}){
			continue;
		} else {
			break;
		}
	}
	s.Session_table[uid] = token;
	return &session_manager_pb.SessionID{Code: uid}, nil;
}
func (s *Session_manager_server) GetSession(ctx context.Context, session_id *session_manager_pb.SessionID) (*session_manager_pb.Token, error){
	token := s.Session_table[session_id.Code]
	if (token != &session_manager_pb.Token{}){
		return token, nil;
	}
	return nil, errors.New("no token associated with this id");
}

// protoc -I=. --go_out=./pkg/session_manager_pb --go_opt=paths=source_relative \
// --go-grpc_out=./pkg/session_manager_pb --go-grpc_opt=paths=source_relative \
// session_manager.proto 