import { Routes, Route, useLocation } from "react-router-dom";
import Artist from "./artist";
import Genres from "./genres";
import Tracks from "./tracks";
import theme from "../../styles/theme";
import Standard from "../../components/layouts/standard";
import { Box } from "@mui/system";

const AboutYouLayout = () => {
  const location = useLocation();
  return (
    <Standard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: theme.palette.secondary.main,
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/artist" element={<Artist></Artist>}></Route>
          <Route path="/genres" element={<Genres></Genres>}></Route>
          <Route path="/tracks" element={<Tracks></Tracks>}></Route>
        </Routes>
      </Box>
    </Standard>
  );
};
export default AboutYouLayout;
