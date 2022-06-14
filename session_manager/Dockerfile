FROM golang:1.18-alpine
WORKDIR /app
EXPOSE 8080
COPY ../go.mod ./
COPY ../go.sum ./
RUN go mod download
COPY ../ ./
WORKDIR /app/api/cmd
RUN go build . 
