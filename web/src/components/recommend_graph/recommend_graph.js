import ForceGraph3d from "react-force-graph-3d";
import { TextureLoader } from "three";
import { SpriteMaterial } from "three";
import { Sprite } from "three";
import theme from "../../styles/theme";
const imgs = ["/sample_album.png", "/sample_album.png", "/sample_album.png"];
const gData = {
  nodes: imgs.map((img, id) => ({ id, img })),
  links: [...Array(imgs.length).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1)),
    })),
};
const RecommendGraph = () => {
  return (
    <ForceGraph3d
      width={1100}
      height={500}
      backgroundColor={theme.palette.bgSecondary.main}
      showNavInfo={false}
      graphData={gData}
      nodeThreeObject={({ img }) => {
        const imgTexture = new TextureLoader().load(`${img}`);
        const material = new SpriteMaterial({ map: imgTexture });
        const sprite = new Sprite(material);
        sprite.scale.set(48, 48);
        return sprite;
      }}
      nodeRelSize={1    }
    ></ForceGraph3d>
  );
};
export default RecommendGraph;
