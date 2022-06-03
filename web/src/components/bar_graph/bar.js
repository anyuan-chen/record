import { Box } from "@mui/material";
import theme from "../../styles/theme";

const percentageConverter = (number) => {
  if (number < 1) {
    return number * 100;
  }
  return number;
};
const GraphBar = ({ percentage, sx, height }) => {
  return (
    <Box
      sx={{
        height: height ? height : theme.spacing(6),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        ...sx,
      }}
    >
      <Box
        sx={{
          color: theme.palette.primary.main,
          backgroundColor: "rgba(0,0,0,0.6)",
          width: `${percentageConverter(percentage)}%`,
          height: "100%",
        }}
      >
        &nbsp;
      </Box>
    </Box>
  );
};
export default GraphBar;
