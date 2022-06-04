import { Box } from "@mui/system";
import theme from "../../styles/theme";
const ProgressBar = ({ children, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: theme.palette.bgSecondary.main,
        borderRadius: theme.spacing(4),
        ...sx
      }}
    >
      {children}
    </Box>
  );
};
export default ProgressBar;
