import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";

const TrackCard = ({ src, title, desc, href, sx }) => {
  return (
    <a href={href}>
      <Box
        sx={{
          background: theme.palette.bgSecondary.main,
          width: "100%",
          height: "100%",
          padding: theme.spacing(4),
          borderRadius: theme.spacing(4),
          display: "flex",
          flexDirection: "column",
          textDecoration: "none",
          justifyContent: "space-evenly",
          ...sx,
        }}
      >
        <img
          src={src}
          alt="menu_item_caption"
          style={{
            width: "100%",
            height: "70%",
            objectFit: "cover",
            borderRadius: "32px",
          }}
        ></img>

        <Box sx={{ display: "flex", justifyContent: "space-between"}}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
          >
            {title}
          </Typography>
          <img src="/arrow.svg" alt="arrow"></img>
        </Box>
        <Typography
          variant="b1"
          component="h3"
          sx={{ color: "white", textDecoration: "none" }}
        >
          {desc}
        </Typography>
      </Box>
    </a>
  );
};
export default TrackCard;
