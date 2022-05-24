import React from "react";
import BaseLayout from "../components/layouts/baselayout";
import "./lander.css";
const Lander = () => {
  return (
    <div style={{ height: "100vh"}}>
      <BaseLayout>
        <div className="lander__container">
          <h1 className="h0">do you have...</h1>
          <div className="lander__textlist">
            <h2 className="h3 fade"> an unfortunate bubblegum pop addiction</h2>
            <h2 className="h3 fade">
              {" "}
              playlists that share the same four chords
            </h2>
            <h2 className="h3 fade">
              {" "}
              lingering affection for the Warped Tour
            </h2>
          </div>
        </div>
        <div className="lander__cta">
          <div className="lander__ctagroup">
            <div className="lander__ctatextgroup">
              <h3 className="h3">find out, if you please</h3>
              <p className="h4 light">
                don't worry, we won't change your
                <br></br>precious playlists
              </p>
            </div>
            <button className="lander__button">
              <img src="/icons/spotify-fill.svg" alt="spotify logo"></img>
              <p className="h5">login to spotify</p>
            </button>
          </div>
          <div className="lander__albums">
            <img
              className="lander__albumscover"
              alt="album 1"
              src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
            ></img>
            <img
              className="lander__albumscover"
              alt="album 2"
              src="https://img.apmcdn.org/4f25ecdbbd7af5fed833153302515a94c990de11/square/586434-20130508-favorite-album-covers.jpg"
            ></img>
            <img
              className="lander__albumscover"
              alt="album 3"
              src="https://assets.vogue.com/photos/58b9984461606a75f44032fa/master/pass/00-square-lorde-album-art.jpg"
            ></img>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};
export default Lander;
