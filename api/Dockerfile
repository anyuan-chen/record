FROM golang:1.18-alpine
WORKDIR /app
EXPOSE 8080
COPY go.mod ./
COPY go.sum ./
RUN go mod download
COPY . ./
WORKDIR /app/cmd
RUN go build -o /api
CMD ["/api"]