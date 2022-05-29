package session_manager_test

import (
	"context"
	"testing"

	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	session_manager "github.com/anyuan-chen/record/session_manager/pkg"
	"github.com/stretchr/testify/assert"
)


func TestCreateRetrieveSession(t *testing.T){
	session_table := make(map[string]*session_manager_pb.Token)
	Manager := session_manager.Session_manager_server{Session_table: session_table}
	sampleToken := &session_manager_pb.Token{Token: []byte("hi")}
	id, err := Manager.CreateSession(context.Background(), sampleToken)
	assert.Nil(t, err)
	token, err := Manager.GetSession(context.Background(), &session_manager_pb.SessionID{Code: id.Code})
	assert.Nil(t, err)
	assert.Equal(t, token, sampleToken)
}