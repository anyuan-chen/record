import { Box, Typography } from "@mui/material";
import theme from "../../styles/theme";
import GraphBar from "./bar";
const GraphItem = ({ percentage, title }) => {
  return (
    <Box
      sx={{
        color: theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        rowGap: theme.spacing(0.5),
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          columnGap: theme.spacing(2),
          alignItems: "center",
        }}
      >
        <GraphBar percentage={percentage} sx={{ width: "90%" }}></GraphBar>
        <Typography variant="b1" sx={{ fontWeight: "bold" }}>
          {percentage}%
        </Typography>
      </Box>
    </Box>
  );
};

export default GraphItem;
