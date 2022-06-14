# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import core_pb2 as core__pb2
import image_processing_pb2 as image__processing__pb2


class ImageProcessorStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetCollage = channel.unary_unary(
                '/proto.ImageProcessor/GetCollage',
                request_serializer=image__processing__pb2.Images.SerializeToString,
                response_deserializer=core__pb2.Image.FromString,
                )


class ImageProcessorServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetCollage(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ImageProcessorServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetCollage': grpc.unary_unary_rpc_method_handler(
                    servicer.GetCollage,
                    request_deserializer=image__processing__pb2.Images.FromString,
                    response_serializer=core__pb2.Image.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'proto.ImageProcessor', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ImageProcessor(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetCollage(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/proto.ImageProcessor/GetCollage',
            image__processing__pb2.Images.SerializeToString,
            core__pb2.Image.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
