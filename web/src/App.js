import { Box } from "@mui/system";
import theme from "./styles/theme";
import SearchBar from "./components/search_bar/search_bar";
import { useState } from "react";
import Bar from "./components/bar_graph/bar";
import Item from "./components/bar_graph/item";
function App() {
  return (
    <Box
      sx={{
        background: theme.palette.bgPrimary.main,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "repeat(1, 1fr)",
        height: "100vh",
        minHeight: "0",
        minWdith: "0",
      }}
    >
      <Item percentage="50" title="lit"></Item>
    </Box>
  );
}

export default App;
