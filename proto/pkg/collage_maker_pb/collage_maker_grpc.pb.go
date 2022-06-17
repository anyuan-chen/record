// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.19.4
// source: collage_maker.proto

package collage_maker_pb

import (
	context "context"
	core_pb "github.com/anyuan-chen/record/proto/pkg/core_pb"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ImageProcessorClient is the client API for ImageProcessor service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ImageProcessorClient interface {
	GetCollage(ctx context.Context, in *Images, opts ...grpc.CallOption) (*core_pb.Image, error)
}

type imageProcessorClient struct {
	cc grpc.ClientConnInterface
}

func NewImageProcessorClient(cc grpc.ClientConnInterface) ImageProcessorClient {
	return &imageProcessorClient{cc}
}

func (c *imageProcessorClient) GetCollage(ctx context.Context, in *Images, opts ...grpc.CallOption) (*core_pb.Image, error) {
	out := new(core_pb.Image)
	err := c.cc.Invoke(ctx, "/proto.ImageProcessor/GetCollage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ImageProcessorServer is the server API for ImageProcessor service.
// All implementations must embed UnimplementedImageProcessorServer
// for forward compatibility
type ImageProcessorServer interface {
	GetCollage(context.Context, *Images) (*core_pb.Image, error)
	mustEmbedUnimplementedImageProcessorServer()
}

// UnimplementedImageProcessorServer must be embedded to have forward compatible implementations.
type UnimplementedImageProcessorServer struct {
}

func (UnimplementedImageProcessorServer) GetCollage(context.Context, *Images) (*core_pb.Image, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCollage not implemented")
}
func (UnimplementedImageProcessorServer) mustEmbedUnimplementedImageProcessorServer() {}

// UnsafeImageProcessorServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ImageProcessorServer will
// result in compilation errors.
type UnsafeImageProcessorServer interface {
	mustEmbedUnimplementedImageProcessorServer()
}

func RegisterImageProcessorServer(s grpc.ServiceRegistrar, srv ImageProcessorServer) {
	s.RegisterService(&ImageProcessor_ServiceDesc, srv)
}

func _ImageProcessor_GetCollage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Images)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ImageProcessorServer).GetCollage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.ImageProcessor/GetCollage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ImageProcessorServer).GetCollage(ctx, req.(*Images))
	}
	return interceptor(ctx, in, info, handler)
}

// ImageProcessor_ServiceDesc is the grpc.ServiceDesc for ImageProcessor service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ImageProcessor_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "proto.ImageProcessor",
	HandlerType: (*ImageProcessorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetCollage",
			Handler:    _ImageProcessor_GetCollage_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "collage_maker.proto",
}