import theme from "../../styles/theme";
import LanderCta from "./landerCta";
import { Box, Typography } from "@mui/material";
import Standard from "../../components/layouts/standard";

const Lander = () => {
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
            py: theme.spacing(12),
            display: "flex",
            flexDirection: "column",
            rowGap: theme.spacing(12),
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: theme.spacing(6),
            }}
          >
            <Typography variant="h0" component="h1">
              do you have ...
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: theme.spacing(2),
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "300" }}>
                an unfortunate bublegum pop addiction?
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: "300" }}>
                playlists that use the same four chords?
              </Typography>

              <Typography variant="h3" sx={{ fontWeight: "300" }}>
                an emotional connection to the Warped Tour?
              </Typography>
            </Box>
          </Box>
          <LanderCta></LanderCta>
        </Box>
      </Box>
    </Standard>
  );
};
export default Lander;
