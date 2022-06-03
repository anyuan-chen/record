import { Box } from "@mui/system";
import theme from "./styles/theme";

import Item from "./components/bar_graph/item";
import TrackCard from "./components/track_card/track_card";
import ProgressBar from "./components/progress_bar/progress_bar";
import Graph from "./components/bar_graph/graph";
import ProgressElement from "./components/progress_bar/progress_element";
import Showcase from "./components/showcase/showcase";
import IconButton from "./components/buttons/icon_button";
import { ButtonUnstyled } from "@mui/base";
function App() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(18, 18, 18, 0.925), rgba(18, 18, 18, 0.925)), conic-gradient(from -79.8deg at 50% 50%, #FF6FDF 0deg, rgba(0, 0, 0, 0) 360deg), conic-gradient(from 117.72deg at 11.22% 42.53%, #92F09B 0deg, rgba(0, 0, 0, 0) 360deg), conic-gradient(from 25.1deg at 1.28% 101.27%, #81EFF7 0deg, rgba(0, 0, 0, 0) 295.57deg, #81EFF7 360deg), conic-gradient(from -71.19deg at 101.53% 107.08%, #FFFFFF 0deg, #ED7070 360deg)",
      }}
    >
      <Box
        sx={{
          // display: "grid",
          // gridTemplateColumns: "repeat(1, 1fr)",
          // gridTemplateRows: "repeat(2, 1fr)",
          height: "100vh",
          minHeight: "0",
          minWdith: "0",
          backdropFilter: "blur(100px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton src="/spotify.svg">login to spotify</IconButton>
        <IconButton href="google.com">play on spotify</IconButton>
      </Box>
    </Box>
  );
}

export default App;
