import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
const imgVariants = {
  rest: {
    filter:
      "invert(99%) sepia(1%) saturate(1355%) hue-rotate(251deg) brightness(115%) contrast(100%)",
  },
  hover: {
    filter: "none",
  },
};
const boxVariants = {
  rest: {},
  hover: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.bgPrimary.main,
  },
};
const IconButton = ({ src, children, onClick, href }) => {
  return (
    <motion.a href={href}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.bgPrimary.main,
          color: theme.palette.primary.main,
          border: "none",
          px: theme.spacing(4),
          py: theme.spacing(2),
          cursor: "pointer",
          columnGap: theme.spacing(2),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme.spacing(3),
        }}
        component={motion.button}
        initial="rest"
        whileHover="hover"
        animate="rest"
        onClick={onClick}
        variants={boxVariants}
      >
        {src ? (
          <motion.img src={src} alt="icon" variants={imgVariants}></motion.img>
        ) : (
          <></>
        )}
        <Typography variant="h4" component="h3">
          {children}
        </Typography>
      </Box>
    </motion.a>
  );
};
export default IconButton;
