package models

import "net/http"

type HttpService interface {
	TopArtists(w http.ResponseWriter, r *http.Request)
	TopSongs(w http.ResponseWriter, r *http.Request)
	TopGenres(w http.ResponseWriter, r *http.Request)

	TopSongCollage(w http.ResponseWriter, r *http.Request)
	TopArtistCollage(w http.ResponseWriter, r *http.Request)

	AveragePopularity(w http.ResponseWriter, r *http.Request)
	RecommendedSongs(w http.ResponseWriter, r *http.Request)
	MakeRecommendedPlaylist(w http.ResponseWriter, r *http.Request)

	SpotifyLogin(w http.ResponseWriter, r *http.Request)
	SpotifyCallback(w http.ResponseWriter, r *http.Request)

	Search(w http.ResponseWriter, r *http.Request)
	SongInfo(w http.ResponseWriter, r *http.Request)
}
