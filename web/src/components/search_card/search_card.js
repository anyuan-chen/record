import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import theme from "../../styles/theme";
const boxVariants = {
    rest: {
        background: theme.palette.bgSecondary.main,
    },
    hover : {
        background: theme.palette.bgSecondary.darker,
    }
}
const SearchCard = ({ src, title, desc, sx }) => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.bgSecondary.main,
        borderRadius: theme.spacing(4),
        padding: theme.spacing(4),
        display: "flex",
        columnGap: theme.spacing(4),
        ...sx,
      }}
      component={motion.div}
      whileHover={{ backgroundColor: theme.palette.bgSecondary.darker }}
    >
      <Box sx={{ borderRadius: theme.spacing(4), overflow: "hidden" }}>
        <img
          src={src}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          py: theme.spacing(1),
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{ fontWeight: "bold", color: "white" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" component="h3" sx={{ color: "white" }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};
export default SearchCard;
