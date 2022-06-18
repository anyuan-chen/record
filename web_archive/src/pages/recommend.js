import BaseLayout from "../components/layouts/baselayout";
import Song from "../components/recommend/song";
import "./recommend.css";
import { motion } from "framer-motion";
const ButtonVariants = {
  unhovered: {},
  hovered: {
    backgroundColor: "black",
    color: "white",
  },
};

const Recommend = () => {
  return (
    <BaseLayout>
      <div className="recommendation__container">
        <div className="recommendation__title">
          <h1 className="h0">hi, name</h1>
          <h2 className="h3">
            i see that you are really into GENRE_ONE and ARTIST_TWO. also,
            ARTIST_THREE and GENRE_ONE
          </h2>
        </div>
        <div className="recommendation__songs">
          <h3 className="h4 light">
            here are some songs i think you'd enjoy...
          </h3>
          <Song title="hi" artist="jay chou" album="common jasmine"></Song>
          <Song title="hi" artist="jay chou" album="common jasmine"></Song>
          <Song title="hi" artist="jay chou" album="common jasmine"></Song>
        </div>
        <div className="recommendation__cta">
          <h1 className="h0">i have more for you.</h1>
          <h2 className="h2 fade">
            if you want, I can add a playlist on spotify for you
          </h2>
          <motion.a href="/dashboard" style={{ textDecoration: "none" }}>
            <motion.button
              initial="unhovered"
              whileHover="hovered"
              animate="unhovered"
              variants={ButtonVariants}
              className="lander__button"
            >
              <p className="h4">yes please!</p>
            </motion.button>
          </motion.a>
        </div>
        <div className="recommendation__cta">
          <h1 className="h1 light"> that’s all i have for you right now....</h1>
          <h2 className="h2 fade light">
            make sure to check back soon! i might have something new ;)
          </h2>
          <motion.a href="/dashboard" style={{ textDecoration: "none" }}>
            <motion.button
              initial="unhovered"
              whileHover="hovered"
              animate="unhovered"
              variants={ButtonVariants}
              className="lander__button"
            >
              <p className="h4">yes please!</p>
            </motion.button>
          </motion.a>
        </div>
        <div style={{ marginBottom: "8rem" }}></div>
      </div>
    </BaseLayout>
  );
};
export default Recommend;
