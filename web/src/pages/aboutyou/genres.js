import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import { Box } from "@mui/material";
import ProgressBar from "../../components/progress_bar/progress_bar";
import ProgressElement from "../../components/progress_bar/progress_element";
import Graph from "../../components/bar_graph/graph";
import GraphItem from "../../components/bar_graph/item";
const Genres = () => {
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
              Your favorite genre is <span style={{ color: "white" }}>pop</span>{" "}
              which appears in a respectable 84% of tracks.
            </Typography>
          </Box>
          <Graph>
            <GraphItem
              title="Pop"
              percentage={34}
              height={theme.spacing(5)}
            ></GraphItem>
            <GraphItem
              title="Pop"
              percentage={34}
              height={theme.spacing(5)}
            ></GraphItem>
            <GraphItem
              title="Pop"
              percentage={34}
              height={theme.spacing(5)}
            ></GraphItem>
            <GraphItem
              title="Pop"
              percentage={34}
              height={theme.spacing(5)}
            ></GraphItem>
          </Graph>
        </Box>
      </Box>
      <ProgressBar
        sx={{ position: "absolute", bottom: theme.spacing(6), right: "-100px" }}
      >
        <ProgressElement href="/">home</ProgressElement>

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
