import theme from "../../styles/theme";
import Standard from "../../components/layouts/standard";
import { Box } from "@mui/system";
import MenuCard from "../../components/menu_card/menu_card";
import useFetchJSON from "../../data/useFetchJSON";

const Dashboard = () => {
  const { data, error, loading } = useFetchJSON(
    process.env.REACT_APP_BACKEND_URL + "/gettopartists"
  );
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
            width: "1100px",
            display: "flex",
            flexDirection: "column",
            py: theme.spacing(6),
            rowGap: theme.spacing(5),
            minHeight: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              py: theme.spacing(3),
              px: theme.spacing(3),
              backgroundColor: theme.palette.bgSecondary.main,
              borderRadius: theme.spacing(4),
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "1fr 1fr",
              columnGap: theme.spacing(3),
              rowGap: theme.spacing(3),
            }}
          >
            <MenuCard
              src="/sample_album.png"
              title="about you"
              desc="boost or destroy your ego"
              sx={{ gridColumn: "1/2", gridRow: "1/2" }}
            ></MenuCard>
            <MenuCard
              src="/sample_album.png"
              title="recommendations"
              desc="do you really trust an ai to do this?"
              sx={{ gridColumn: "2/4", gridRow: "1/2" }}
            ></MenuCard>
            <MenuCard
              src="/sample_album.png"
              title="explorer"
              desc="find more about your favorite song"
              sx={{ gridColumn: "1/3", gridRow: "2/3" }}
            ></MenuCard>
            <MenuCard
              src="/sample_album.png"
              title="log out"
              desc="T_T pls come back soon"
              sx={{ gridColumn: "3/4", gridRow: "2/3" }}
            ></MenuCard>
          </Box>
        </Box>
      </Box>
    </Standard>
  );
};
export default Dashboard;
