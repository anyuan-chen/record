import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

const MenuCard = ({ src, title, desc, sx, href }) => {
  return (
    <Box
      sx={{
        py: theme.spacing(4),
        px: theme.spacing(6),
        backgroundColor: theme.palette.bgSecondary.darker,
        borderRadius: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        rowGap: theme.spacing(2),
        cursor: "pointer",
        alignItems: "start",
        ...sx,
      }}
      href={href}
      component={motion.a}
      whileHover={{ backgroundColor: theme.palette.bgSecondary.main }}
    >
      <img
        src={src}
        alt="menu_item_caption"
        style={{ maxHeight: "200px", objectFit: "cover", borderRadius: theme.spacing(2) }}
      ></img>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: theme.spacing(1),
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="b1" component="h3" sx={{ color: "white" }}>
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};
export default MenuCard;
