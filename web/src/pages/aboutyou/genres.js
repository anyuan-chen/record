import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import { Box } from "@mui/material";
import ProgressBar from "../../components/progress_bar/progress_bar";
import ProgressElement from "../../components/progress_bar/progress_element";
import Graph from "../../components/bar_graph/graph";
import GraphItem from "../../components/bar_graph/item";
import Loading from "../loading";
import useFetch from "../../data/useFetch";
const req = [
  {
    url: "http://localhost:8080/gettopgenres",
    params: {
      limit: 5,
    },
    responseType: "JSON",
  },
];
const Genres = () => {
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
        your genres
      </Typography>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "4fr 7fr",
            columnGap: theme.spacing(10),
            p: theme.spacing(10),
            borderRadius: theme.spacing(4),
            backgroundColor: theme.palette.bgSecondary.main,
          }}
        >
          <Box sx={{ display: "flex", pt: theme.spacing(6) }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Your favorite genre is{" "}
              <span style={{ color: "white" }}>{data[0][0].genre}</span> which
              appears in a respectable{" "}
              {Math.round((data[0][0].frequency / data[0][0].total) * 100)}% of
              tracks.
            </Typography>
          </Box>
          <Graph>
            {data[0].slice(1).map((genre) => {
              return (
                <GraphItem
                  title={genre.genre}
                  percentage={Math.round((genre.frequency / genre.total) * 100)}
                ></GraphItem>
              );
            })}
          </Graph>
        </Box>
      </Box>
      <ProgressBar
        sx={{ position: "absolute", bottom: theme.spacing(6), right: "-100px" }}
      >
        <ProgressElement href="/dashboard">home</ProgressElement>

        <ProgressElement href="/aboutyou/artist">your artist</ProgressElement>
        <ProgressElement href="/aboutyou/tracks">your tracks</ProgressElement>
        <ProgressElement activated href="/aboutyou/genres">
          your genres
        </ProgressElement>
      </ProgressBar>
    </Box>
  );
};
export default Genres;
