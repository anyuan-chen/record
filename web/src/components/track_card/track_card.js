import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

const boxVariants = {
  rest: {},
  hover: {
    backgroundColor: theme.palette.bgSecondary.darker,
  },
};
const arrowVariants = {
  rest: {
    transform: "none",
  },
  hover: {
    transform: "translate(1px,-1px)",
  },
};
const TrackCard = ({ src, title, desc, href, sx }) => {
  return (
    <motion.a href={href}>
      <Box
        sx={{
          background: theme.palette.bgSecondary.main,
          width: "100%",
          height: "100%",
          py: theme.spacing(4),
          cursor: "pointer",
          px: theme.spacing(4),
          borderRadius: theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          justifyContent: "space-evenly",
          rowGap: theme.spacing(2),
          ...sx,
        }}
        component={motion.div}
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={boxVariants}
      >
        <img
          src={src}
          alt="menu_item_caption"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "32px",
          }}
        ></img>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} component={motion.div}>
          <Typography
            variant="b1"
            component="h2"
            sx={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
          >
            {title}
          </Typography>
          <motion.img src="/arrow.svg" alt="arrow" variants={arrowVariants}></motion.img>
        </Box>
        <Typography
          variant="b1"
          component="h3"
          sx={{ color: "white", textDecoration: "none" }}
        >
          {desc}
        </Typography>
      </Box>
    </motion.a>
  );
};
export default TrackCard;
