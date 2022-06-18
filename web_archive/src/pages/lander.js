import React from "react";
import BaseLayout from "../components/layouts/baselayout";
import "./lander.css";
import { motion } from "framer-motion";
const ButtonVariants = {
  unhovered: {},
  hovered: {
    backgroundColor: "black",
    color: "white",
  },
};
const LogoVariants = {
  unhovered: {},
  hovered: {
    filter:
      "invert(100%) sepia(0%) saturate(4%) hue-rotate(178deg) brightness(102%) contrast(105%)",
  },
};
const Lander = () => {
  return (
    <motion.div
      style={{ height: "100vh" }}
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BaseLayout>
        <div className="lander__container">
          <h1 className="h0 bold">do you have...</h1>
          <div className="lander__textlist">
            <h2 className="h4"> an serial bubblegum pop addiction?</h2>
            <h2 className="h4">
              {" "}
              playlists that share the same four chords?
            </h2>
            <h2 className="h4">
              {" "}
              an embarassing amount of affection for the Warped Tour?
            </h2>
          </div>
        </div>
        <div className="lander__cta">
          <div className="lander__ctagroup">
            <div className="lander__ctatextgroup">
              <h3 className="h3">find out, if you please.</h3>
              <p className="b1 fade">
                don't worry, we won't change your
                <br></br>"precious" playlists 
              </p>
            </div>
            <motion.button
              initial="unhovered"
              whileHover="hovered"
              animate="unhovered"
              variants={ButtonVariants}
              className="lander__button"
            >
              <motion.img
                src="/icons/spotify-fill.svg"
                alt="spotify logo"
                variants={LogoVariants}
                height="32px"
              ></motion.img>
              <p className="h4">login to spotify</p>
            </motion.button>
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
    </motion.div>
  );
};
export default Lander;
