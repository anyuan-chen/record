import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { motion } from "framer-motion";

const MenuCard = ({ src, title, desc, sx, href }) => {
  return (
    <motion.a href={href}>
      <Box
        sx={{
          background: theme.palette.bgSecondary.main,
          padding: theme.spacing(4),
          borderRadius: theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          rowGap: theme.spacing(2),
          cursor: "pointer",
          ...sx,
        }}
        component={motion.div}
        whileHover={{ backgroundColor: theme.palette.bgSecondary.darker }}
      >
        <img
          src={src}
          alt="menu_item_caption"
          style={{ width: "100%", height: "75%", objectFit: "cover" }}
        ></img>
        <Box
          sx={{
            height: "30%",
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
    </motion.a>
  );
};
export default MenuCard;
