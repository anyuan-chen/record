import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const iconVariants = {
  rest: {},
  hover: {
    filter:
      "invert(100%) sepia(0%) saturate(4%) hue-rotate(178deg) brightness(102%) contrast(105%)",
    transform: "rotate(90deg)",
  },
};
const buttonVariants = {
  rest: {
    backgroundColor: "transparent",
  },
  hover: {
    backgroundColor: "black",
  },
};
const pageVariants = {
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  hidden: { scale: 0.9, opacity: 0 },
};

const InfoBlurb = ({ children, message, scrollto, passRef }) => {
  const handleClick = () => {
    scrollto.current.scrollIntoView({ behavior: "smooth" });
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div className="aboutyou__container" ref={passRef}>
      <motion.div
        className="aboutyou__page"
        initial="hidden"
        animate={control}
        ref={ref}
        variants={pageVariants}
      >
        <motion.h1 className="h1">{message}</motion.h1>
        <motion.button
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={buttonVariants}
          className="aboutyou__playicon"
          onClick={handleClick}
        >
          <motion.img
            src="./icons/fast-forward.svg"
            alt="fast forward icon"
            variants={iconVariants}
          ></motion.img>
        </motion.button>

        {children}
      </motion.div>
    </motion.div>
  );
};
export default InfoBlurb;
