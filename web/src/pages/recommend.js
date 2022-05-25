import BaseLayout from "../components/layouts/baselayout";
import Song from "../components/recommend/song";
import "./recommend.css";
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
          <Song></Song>
        </div>
      </div>
    </BaseLayout>
  );
};
export default Recommend;
