import { Box } from "@mui/material";
import React from "react";
import TripleOverlay from "../art/tripleoverlay";
import theme from "../../styles/theme";

export default function Cta({ children, src }) {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: theme.spacing(12),
        pl: theme.spacing(8),
        pr: theme.spacing(9),
        py: theme.spacing(8),
        borderRadius: theme.spacing(4),
        justifyContent: "space-between",
        backgroundColor: theme.palette.bgSecondary.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: theme.spacing(8),
        }}
      >
        {children}
      </Box>
      <TripleOverlay src={src}></TripleOverlay>
    </Box>
  );
}
