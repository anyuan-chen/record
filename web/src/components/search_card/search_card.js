import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import theme from "../../styles/theme";

const SearchCard = ({ src, title, desc, sx, href}) => {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.bgSecondary.darker,
        borderRadius: theme.spacing(4),
        padding: theme.spacing(4),
        display: "flex",
        columnGap: theme.spacing(4),
        ...sx,
      }}
      component={motion.a}
      href={href}
      whileHover={{ backgroundColor: theme.palette.bgSecondary.main }}
    >
      <Box
        sx={{
          borderRadius: theme.spacing(4),
          overflow: "hidden",
          maxWidth: "40%",
        }}
      >
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
