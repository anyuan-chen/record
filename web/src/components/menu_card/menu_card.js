import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";

const MenuCard = ({ src, title, desc, sx }) => {
  return (
    <Box
      sx={{
        background: theme.palette.bgSecondary.main,
        width: "100%",
        padding: theme.spacing(4),
        borderRadius: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        rowGap: theme.spacing(2),
        ...sx,
      }}
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
          justifyContent: "space-evenly"
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
