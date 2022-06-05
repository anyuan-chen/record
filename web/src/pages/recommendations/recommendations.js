import Standard from "../../components/layouts/standard";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import RecommendGraph from "../../components/recommend_graph/recommend_graph";
import { Typography } from "@mui/material";
const Recommendations = () => {
  return (
    <Standard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: theme.palette.secondary.main,
        }}
      >
        <Box
          sx={{
            maxWidth: "1100px",
            display: "flex",
            flexDirection: "column",
            py: theme.spacing(6),
            rowGap: theme.spacing(5),
            minHeight: "100vh",
          }}
        >
          <Typography variant="h0" sx={{ color: theme.palette.tertiary.main }}>
            recommendations
          </Typography>
          <RecommendGraph></RecommendGraph>
        </Box>
      </Box>
    </Standard>
  );
};
export default Recommendations;
