import "../../pages/recommend.css";
const Song = ({ title, artist, album }) => {
  return (
    <div className="recommendation__genericsection">
      <img
        src="https://lastfm.freetls.fastly.net/i/u/770x0/8cc09636be566a39be4a2c1d2a4aae20.jpg#8cc09636be566a39be4a2c1d2a4aae20"
        alt="artist"
        height="256px"
        width="256px"
      ></img>
      <div
        className="aboutyou__genericsection__text"
        style={{ paddingLeft: "4rem" }}
      >
        <h1 className="h2">{title}</h1>
        <h4 className="h5">{artist}</h4>
        <h4 className="h5">{album}</h4>
      </div>
    </div>
  );
};
export default Song;
