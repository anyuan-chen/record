package session_manager_test

import (
	"context"
	"encoding/json"
	"log"
	"net"
	"testing"

	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	session_manager "github.com/anyuan-chen/record/session_manager/pkg/session_manager"
	"github.com/google/uuid"
	"github.com/stretchr/testify/assert"
	"golang.org/x/oauth2"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/test/bufconn"
)

const bufSize = 1024 * 1024
func init(){
	lis = bufconn.Listen(bufSize)
	s := grpc.NewServer()
	session_table := make(map[string]*core_pb.Token)
	session_manager_pb.RegisterSessionManagerServer(s, &session_manager.Session_manager_server{Session_table: session_table})
	go func () {
		if err := s.Serve(lis); err != nil {
			log.Fatalf("Server exited with error: %v", err)
		}
	}()
}
var lis *bufconn.Listener
func bufDialer(context.Context, string) (net.Conn, error) {
    return lis.Dial()
}
//mock rpc test for the logic of the session manager
func TestClientCreateRetrieveConnection(t *testing.T) {
	ctx := context.Background()
	session_manager, err := grpc.DialContext(ctx, "bufnet", grpc.WithContextDialer(bufDialer), grpc.WithTransportCredentials(insecure.NewCredentials()))
	if (err != nil){
		log.Fatal(err)
	}
	defer session_manager.Close()
	Manager := session_manager_pb.NewSessionManagerClient(session_manager)
	sampleToken_value, _ := json.Marshal(oauth2.Token{})
	sampleToken := &core_pb.Token{Token: sampleToken_value}
	id, err := Manager.CreateSession(context.Background(), sampleToken)
	assert.Nil(t, err)
	token, err := Manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: id.Code})
	assert.Nil(t, err)

	var retrieved_token oauth2.Token
	json.Unmarshal(token.Token, &retrieved_token)

	assert.Equal(t, oauth2.Token{}, retrieved_token)

	unknown_token, err := Manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: "not_in"})
	assert.Nil(t, unknown_token)
	assert.NotNil(t, err)
}
//local test without networking/grpc for the logic of the session manager
func TestCreateRetrieveSession(t *testing.T){
	session_table := make(map[string]*core_pb.Token)
	Manager := session_manager.Session_manager_server{Session_table: session_table}
	sampleToken := &core_pb.Token{Token: []byte("hi")}
	id, err := Manager.CreateSession(context.Background(), sampleToken)
	assert.Nil(t, err)
	token, err := Manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: id.Code})
	assert.Nil(t, err)
	assert.Equal(t, token, sampleToken)
	unknown_token, err := Manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: uuid.New().String()})
	assert.Nil(t, unknown_token)
	assert.NotNil(t, err)
}