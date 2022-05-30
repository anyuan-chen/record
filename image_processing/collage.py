from asyncio import futures
import io
import proto.pkg.image_processing_pb.image_processing_pb2_grpc
import proto.pkg.image_processing_pb.image_processing_pb2
import grpc 
import logging
import urllib.request
from PIL import Image

class Collage (proto.pkg.image_processing_pb.image_processing_pb2_grpc.ImageProcessorServicer):
    def GetCollage(self, request, context):
        rowCount = request.rowCount
        colCount = request.colCount
        targetSize = request.targetSize
        images = []
        for index, url in enumerate(request.images):
            fileName = "picture" + index + ".png" 
            urllib.request.urlretrieve(url, fileName)
            tempImage = Image.open(fileName)
            resizedImage = tempImage.resize((targetSize, targetSize))
            resizedImage.save("resized" + fileName)
            images.append("resized" + fileName)
        collage = Image.new(mode="RGBA", size=((request.targetSize + 1) * rowCount, (request.targetSize + 1) * colCount))
        for row in range(rowCount):
            for col in range(colCount):
                collage.paste(images[row * rowCount + col],(request.targetSize * row, request.targetSize * col))
        collage_byte_arr = io.BytesIO()
        collage.save(collage_byte_arr, format='PNG')
        collage_byte_arr = collage_byte_arr.getvalue()
        return proto.pkg.image_processing_pb.image_processing_pb2.Image(image=collage_byte_arr)

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    proto.pkg.image_processing_pb.image_processing_pb2_grpc.add_ImageProcessorServicer_to_server(Collage(), server)
    server.add_insecure_port('[::]:4004')
    server.start()
    server.wait_for_termination()

if __name__ == '__main__':
    logging.basicConfig()
    serve()