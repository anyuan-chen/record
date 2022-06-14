import InfoBlurb from "../components/aboutyou/infoblurb";
import BaseLayout from "../components/layouts/baselayout";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./aboutyou.css";
const ButtonVariants = {
  unhovered: {},
  hovered: {
    backgroundColor: "black",
    color: "white",
  },
};
const LogoVariants = {
  unhovered: {
    transform: "rotate(180deg)",
  },
  hovered: {
    transform: " rotate(180deg)",
    filter:
      "invert(100%) sepia(0%) saturate(4%) hue-rotate(178deg) brightness(102%) contrast(105%)",
  },
};
const AboutYou = () => {
  const about__1Ref = useRef(); //refs cannot be in an array
  const about__2Ref = useRef();
  const about__3Ref = useRef();
  const about__4Ref = useRef();
  const about__5Ref = useRef();
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BaseLayout>
        <InfoBlurb
          message="where do we even start, NAME"
          passRef={about__1Ref}
          scrollto={about__2Ref}
        >
          <div className="aboutyou__genericsection">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
              alt="artist"
              className="aboutyou__genericsection__image"
            ></img>
            <div
              className="aboutyou__genericsection__text"
              style={{ paddingLeft: "4rem" }}
            >
              <h3 className="h2">you listen to a lot of</h3>
              <h1 className="h0">artist name here</h1>
              <h4 className="h4 light">
                in fact, they were your most listened artist. <br></br>it was
                not close.
              </h4>
            </div>
          </div>
        </InfoBlurb>
        <InfoBlurb passRef={about__2Ref} scrollto={about__3Ref}>
          <div className="aboutyou__reversegenericsection">
            <div className="aboutyou__genericsection__text">
              <h3 className="h2">please stop playing</h3>
              <h1 className="h0">song name here</h1>
              <h4 className="h4 light">
                maybe some musical diversity could be nice!
              </h4>
            </div>
            <img
              src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
              alt="artist"
              className="aboutyou__genericsection__image"
            ></img>
          </div>
        </InfoBlurb>
        <InfoBlurb passRef={about__3Ref} scrollto={about__4Ref}>
          <div className="aboutyou__verticalsection">
            <h1 className="h0">you really like genre 1</h1>
            <h2 className="h4">you also seem to have a few other tastes</h2>
            <h2 className="h4">
              there's genre 1, genre 2, genre 3, genre 4 ... can't forget about
              genre 5
            </h2>
            <div className="aboutyou__imagearray">
              <img
                src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
                alt="artist"
                className="aboutyou__genericsection__image"
              ></img>
              <img
                src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
                alt="artist"
                className="aboutyou__genericsection__image"
              ></img>
              <img
                src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
                alt="artist"
                className="aboutyou__genericsection__image"
              ></img>
            </div>
          </div>
        </InfoBlurb>
        <InfoBlurb passRef={about__4Ref} scrollto={about__5Ref}>
          <div className="aboutyou__genericsection">
            <img
              src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
              alt="artist"
              className="aboutyou__genericsection__image"
            ></img>
            <div
              className="aboutyou__genericsection__text"
              style={{ paddingLeft: "4rem" }}
            >
              <h1 className="h0">you're pretty hipster</h1>
              <h4 className="h4">
                your most played songs average a popularity index of ___%
              </h4>
              <h4 className="h4">that's pretty low.</h4>
            </div>
          </div>
        </InfoBlurb>
        <motion.div className="aboutyou__container">
          <motion.div className="aboutyou__page">
            <h1 className="h0">thats all I have for you.</h1>
            <h2 className="h1 fade">check back soon! i'll miss you :(</h2>
            <motion.a href="/dashboard" style={{ textDecoration: "none" }}>
              <motion.button
                initial="unhovered"
                whileHover="hovered"
                animate="unhovered"
                variants={ButtonVariants}
                className="lander__button"
              >
                <motion.img
                  src="/icons/fast-forward.svg"
                  alt="spotify logo"
                  variants={LogoVariants}
                  height="48px"
                ></motion.img>
                <p className="h4" ref={about__5Ref}>
                  dashboard
                </p>
              </motion.button>
            </motion.a>
          </motion.div>
        </motion.div>
      </BaseLayout>
    </motion.div>
  );
};
export default AboutYou;
