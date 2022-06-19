import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import ProgressBar from "../../components/progress_bar/progress_bar";
import ProgressElement from "../../components/progress_bar/progress_element";
import TrackCard from "../../components/track_card/track_card";
import useFetch from "../../data/useFetch";
import Loading from "../loading";
const req = [
  {
    url: "http://localhost:8080/gettoptracks",
    params: {
      limit: 3,
    },
    responseType: "JSON",
  },
];
const Tracks = () => {
  const { data, error, loading } = useFetch(req);
  if (error) {
    console.log(error);
  }
  console.log(data);
  return loading ? (
    <Loading></Loading>
  ) : (
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
          {data[0].map((track) => {
            return (
              <TrackCard
                src={track.album.images[0].url}
                title={track.name}
                desc={track.album.name}
                href={track.uri}
              ></TrackCard>
            );
          })}
        </Box>
      </Box>
      <ProgressBar
        sx={{ position: "absolute", bottom: theme.spacing(6), right: "-100px" }}
      >
        <ProgressElement href="/dashboard">home</ProgressElement>
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
