from asyncio import futures
import io
import proto.pkg.image_processing_pb.image_processing_pb2_grpc
import proto.pkg.image_processing_pb.image_processing_pb2
import grpc 
import logging
import urllib.request
from PIL import Image
#this function creates a collage of image urls provided to it. it does this in a rectangle form without any gaps
class Collage (proto.pkg.image_processing_pb.image_processing_pb2_grpc.ImageProcessorServicer):
    def GetCollage(self, request, context):
        #retrieves important values from the protobuf request
        rowCount = request.rowCount
        colCount = request.colCount
        targetSize = request.targetSize
        #creates an empty array for the images after they have been created in PIL from the urls
        images = []
        for index, url in enumerate(request.images):
            #temporary file name
            fileName = "picture" + index + ".png" 
            #getting image from url and saving it to filename
            urllib.request.urlretrieve(url, fileName)
            tempImage = Image.open(fileName)
            resizedImage = tempImage.resize((targetSize, targetSize))
            resizedImage.save("resized" + fileName)
            images.append("resized" + fileName)
        #creating a new image to store the new collage in
        collage = Image.new(mode="RGBA", size=((request.targetSize + 1) * rowCount, (request.targetSize + 1) * colCount))
        #right to left, then up to down layout of all the created images into the row/column
        for row in range(rowCount):
            for col in range(colCount):
                #paste the image from the array index in its correct position
                collage.paste(images[row * rowCount + col],(request.targetSize * row, request.targetSize * col))
        #create a stream of in-memory bytes
        collage_byte_arr = io.BytesIO()
        #saves image to the stream of bytes
        collage.save(collage_byte_arr, format='PNG')
        #retrieve the bytes from the stream
        collage_byte_arr = collage_byte_arr.getvalue()
        #return the image in byte array form as specified to the protobuf
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