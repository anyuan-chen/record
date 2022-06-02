import { Box, Typography } from "@mui/material";
import Bar from "./bar";
import theme from "../../styles/theme";
const Item = ({ percentage, title }) => {
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
        <Bar percentage={percentage} sx={{ width: "90%" }}></Bar>
        <Typography variant="b1" sx={{ fontWeight: "bold" }}>
          {percentage}%
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
