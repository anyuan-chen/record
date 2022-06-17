package main

import (
	"log"
	"net/http"

	api "github.com/anyuan-chen/record/api/pkg"
	"github.com/anyuan-chen/record/proto/pkg/core_pb"
	"github.com/anyuan-chen/record/proto/pkg/session_manager_pb"
	"github.com/gorilla/mux"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type Server struct {
	r *mux.Router
}

func main() {
	session_manager, err := grpc.Dial("localhost:7070", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	session_client := session_manager_pb.NewSessionManagerClient(session_manager)

	core_manager, err := grpc.Dial("localhost:6060", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	core_client := core_pb.NewCoreManagerClient(core_manager)
	service := api.NewService(session_client, core_client)
	r := mux.NewRouter()

	r.HandleFunc("/login", service.SpotifyLogin)
	r.HandleFunc("/callback", service.SpotifyCallback)
	r.HandleFunc("/gettopartists", service.TopArtists)
	r.HandleFunc("/gettopsongs", service.TopSongs)
	r.HandleFunc("/gettopgenres", service.TopGenres)
	r.HandleFunc("/getrecommendedsongs", service.RecommendedSongs)
	r.HandleFunc("/makerecommendedplaylist", service.MakeRecommendedPlaylist)
	r.HandleFunc("/getpopularity", service.AveragePopularity)
	r.HandleFunc("/getartistscollage", service.ArtistCollage)
	http.Handle("/", &Server{r: r})
	http.ListenAndServe(":8080", nil)
}
func (s *Server) ServeHTTP(rw http.ResponseWriter, req *http.Request) {
	if origin := req.Header.Get("Origin"); origin != "" {
		rw.Header().Set("Access-Control-Allow-Origin", "http://localhost")
		rw.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		rw.Header().Set("Access-Control-Allow-Credentials", "true")
		rw.Header().Set("Access-Control-Allow-Headers",
			"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	}
	if req.Method == "OPTIONS" {
		return
	}
	s.r.ServeHTTP(rw, req)
}
