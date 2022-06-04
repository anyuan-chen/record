import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import ProgressBar from "../../components/progress_bar/progress_bar";
import ProgressElement from "../../components/progress_bar/progress_element";
import TrackCard from "../../components/track_card/track_card";

const Tracks = () => {
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
        your tracks
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            columnGap: theme.spacing(6),
            p: theme.spacing(4),
            borderRadius: theme.spacing(4),
            backgroundColor: theme.palette.bgSecondary.main,
          }}
        >
          <TrackCard
            src="/sample_album.png"
            title="hi"
            desc="hi"
            href="https://google.com"
          ></TrackCard>
          <TrackCard
            src="/sample_album.png"
            title="hi"
            desc="hi"
            href="https://google.com"
          ></TrackCard>
          <TrackCard
            src="/sample_album.png"
            title="hi"
            desc="hi"
            href="https://google.com"
          ></TrackCard>
        </Box>
      </Box>
      <ProgressBar
        sx={{ position: "absolute", bottom: theme.spacing(6), right: "-100px" }}
      >
        <ProgressElement href="/">home</ProgressElement>
        <ProgressElement href="/aboutyou/artist">your artist</ProgressElement>
        <ProgressElement activated href="/aboutyou/tracks">
          your tracks
        </ProgressElement>
        <ProgressElement href="/aboutyou/genres">your genres</ProgressElement>
      </ProgressBar>
    </Box>
  );
};
export default Tracks;
