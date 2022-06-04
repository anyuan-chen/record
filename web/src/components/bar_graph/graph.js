import { Box } from "@mui/system";
import theme from "../../styles/theme";
const Graph = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: theme.spacing(4)}}>
      {children}
    </Box>
  );
};
export default Graph;
