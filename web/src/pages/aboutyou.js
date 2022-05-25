import InfoBlurb from "../components/aboutyou/infoblurb";
import BaseLayout from "../components/layouts/baselayout";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./aboutyou.css";
const AboutYou = () => {
  const about__1Ref = useRef(); //refs cannot be in an array
  const about__2Ref = useRef();
  const about__3Ref = useRef();
  const about__4Ref = useRef();
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
         <h1>you really like genre 1</h1>
        </InfoBlurb>
        <InfoBlurb passRef={about__4Ref}>

        </InfoBlurb>
      </BaseLayout>
    </motion.div>
  );
};
export default AboutYou;
