import ForceGraph2D from "react-force-graph-2d";
// import { TextureLoader } from "three";
// import { SpriteMaterial } from "three";
// import { Sprite } from "three";
const imgs = ["sample_album.png", "sample_album.png", "sample_album.png"].map(
  (src) => {
    const img = new Image();
    img.src = `./${src}`;
    return img;
  }
);
const gData = {
  nodes: imgs.map((img, idx) => {
    return {
      idx,
      img,
    };
  }),
  links: [...Array(imgs.length).keys()]
    .filter((id) => id)
    .map((id) => ({
      source: id,
      target: Math.round(Math.random() * (id - 1)),
    })),
};

const RecommendGraph = () => {
  return (
    <ForceGraph2D
      width={1100}
      height={500}
      graphData={gData}
      nodeCanvasObject={({ img, x, y }, ctx) => {
        const size = 30;
        ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
      }}
      nodePointerAreaPaint={(node, color, ctx) => {
        const size = 30;
        ctx.fillStyle = color;
        ctx.fillRect(node.x - size / 2, node.y - size / 2, size, size); // draw square as pointer trap
      }}
      onNodeClick={(node, event) => {
        console.log(node.url);
      }}
    />
  );
};
export default RecommendGraph;
