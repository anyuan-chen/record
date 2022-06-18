import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
const Showcase = ({ title, artist, genres, src, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: theme.palette.bgSecondary.main,
        borderRadius: theme.spacing(6),
        columnGap: 0,
        color: theme.palette.primary.main,
        position: "relative",
        width: "1200px",
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          py: theme.spacing(6),
          rowGap: theme.spacing(6),
          alignItems: "flex-start",
          width: "70%",
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.bgTertiary.main,
            px: theme.spacing(8),
            py: theme.spacing(2),
            position: "relative",
            left: theme.spacing(-4),
            borderRadius: theme.spacing(3),
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.bgSecondary.main,
            px: theme.spacing(12),
            py: theme.spacing(4),
            position: "relative",
            left: theme.spacing(-6),
            borderRadius: theme.spacing(3),
            width: "100%",
          }}
        >
          <Typography
            variant={artist.length > 14 ? "h1" : "h0"}
            sx={{ fontWeight: "bold", maxWidth: "70%" }}
          >
            {artist}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: theme.spacing(1),
            position: "relative",
            left: theme.spacing(6),
          }}
        >
          <img src="/Album.svg" alt="album icon"></img>
          <Typography>
            {genres.map((genre) => {
              return <Typography component="span" variant="b1">{genre + " "}</Typography>;
            })}
          </Typography>
        </Box>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          positon: "relative",
        }}
      > */}
      <img
        src={src}
        alt="album"
        style={{
          width: "450px",
          height: "450px",
          right: 0,
          position: "absolute",
          top: theme.spacing(6),
        }}
      ></img>
      {/* </Box> */}
    </Box>
  );
};
export default Showcase;
