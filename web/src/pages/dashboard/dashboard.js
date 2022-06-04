import theme from "../../styles/theme";
import Standard from "../../components/layouts/standard";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MenuCard from "../../components/menu_card/menu_card";

const Dashboard = () => {
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
            minHeight: "100vh"
          }}
        >
          <Typography variant="h0" sx={{ color: theme.palette.tertiary.main }}>
            hi andrew
          </Typography>
          <Box
            sx={{
              py: theme.spacing(3),
              px: theme.spacing(6),
              backgroundColor: theme.palette.bgSecondary.main,
              borderRadius: theme.spacing(4),
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "1fr 1fr",
              columnGap: theme.spacing(6),
              rowGap: theme.spacing(3),
            }}
          >
            <MenuCard
              src="/sample_album.png"
              title="Title"
              desc="Desc"
              sx={{ gridColumn: "1/2", gridRow: "1/2" }}
            ></MenuCard>
            <MenuCard
              src="/sample_album.png"
              title="Title"
              desc="Desc"
              sx={{ gridColumn: "2/4", gridRow: "1/2" }}
            ></MenuCard>
            <MenuCard
              src="/sample_album.png"
              title="Title"
              desc="Desc"
              sx={{ gridColumn: "1/3", gridRow: "2/3" }}
            ></MenuCard>
            <MenuCard
              src="/sample_album.png"
              title="Title"
              desc="Desc"
              sx={{ gridColumn: "3/4", gridRow: "2/3" }}
            ></MenuCard>
          </Box>
        </Box>
      </Box>
    </Standard>
  );
};
export default Dashboard;
