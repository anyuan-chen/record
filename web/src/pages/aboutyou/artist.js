import { Typography } from "@mui/material";
import Showcase from "../../components/showcase/showcase";
import theme from "../../styles/theme";
import { Box } from "@mui/material";
import ProgressBar from "../../components/progress_bar/progress_bar";
import ProgressElement from "../../components/progress_bar/progress_element";
const Artist = () => {
  return (
    <Box
      sx={{
        maxWidth: "1100px",
        display: "flex",
        flexDirection: "column",
        py: theme.spacing(6),
        rowGap: theme.spacing(5),
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant={"oversized"}
        sx={{ color: theme.palette.tertiary.main }}
      >
        your artist
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Showcase
          title="your favorite artist:"
          artist="Lonely Hearts Club and Band"
          album="The Dust Album"
          track="Hype"
          src="/sample_album.png"
        ></Showcase>
      </Box>
      <ProgressBar
        sx={{ position: "absolute", bottom: theme.spacing(6), right: "-100px" }}
      >
        <ProgressElement href="/">home</ProgressElement>
        <ProgressElement activated href="/aboutyou/artist">
          your artist
        </ProgressElement>
        <ProgressElement href="/aboutyou/tracks">your tracks</ProgressElement>
        <ProgressElement href="/aboutyou/genres">your genres</ProgressElement>
      </ProgressBar>
    </Box>
  );
};
export default Artist;
