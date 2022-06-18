import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Standard from "../components/layouts/standard";
import theme from "../styles/theme";
const Loading = () => {
  return (
    <Standard>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "1100px",
            height: "100vh",
            py: theme.spacing(6),
            display: "flex",
            flexDirection: "column",
            rowGap: theme.spacing(4),
          }}
        >
          <Typography
            variant="oversized"
            component="h1"
            sx={{ color: theme.palette.primary.main }}
          >
            loading stats
          </Typography>
        </Box>
      </Box>
    </Standard>
  );
};
export default Loading;
