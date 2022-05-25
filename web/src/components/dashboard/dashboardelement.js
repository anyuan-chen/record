import { motion } from "framer-motion";

const ImageVariants = {
  rest: {
    height: "90%",
    filter: "brightness(85%)",
    objectFit: "cover",
  },
  hovered: {
    height: "85%",
    filter: "none",
    objectFit: "cover",
  },
};
const CaptionVariants = {
  rest: {
    display: "none",
  },
  hovered: {
    display: "block",
  },
};
const DashboardElement = ({ src, alt, label, caption, href }) => {
  return (
    <motion.a
      className="dashboard__element"
      initial="rest"
      whileHover="hovered"
      animate="rest"
      href={href}
    >
      <motion.img variants={ImageVariants} src={src} alt={alt}></motion.img>
      <div className="dashboard__element__text">
        <h2 className="h4">{label}</h2>
        <motion.h3 className="b2" variants={CaptionVariants}>
          {caption}
        </motion.h3>
      </div>
    </motion.a>
  );
};
export default DashboardElement;
