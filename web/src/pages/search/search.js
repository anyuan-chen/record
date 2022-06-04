import Standard from "../../components/layouts/standard";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { Typography } from "@mui/material";
import SearchBar from "../../components/search_bar/search_bar";
import SearchCard from "../../components/search_card/search_card";
const Search = () => {
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
            height: "100vh",
          }}
        >
          <Typography
            variant="oversized"
            sx={{ color: theme.palette.tertiary.main }}
          >
            search
          </Typography>
          <SearchBar></SearchBar>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              padding: theme.spacing(4),
              backgroundColor: theme.palette.bgSecondary.main,
              gap: theme.spacing(4),
              borderRadius: theme.spacing(4),
              height: "60vh",
              overflowY: "scroll",
            }}
            className="scroll_bar"
          >
            <SearchCard
              src="./sample_album.png"
              title="Kanye"
              desc="kanye"
            ></SearchCard>
            <SearchCard
              src="./sample_album.png"
              title="Kanye"
              desc="kanye"
            ></SearchCard>
            <SearchCard
              src="./sample_album.png"
              title="Kanye"
              desc="kanye"
            ></SearchCard>
            <SearchCard
              src="./sample_album.png"
              title="Kanye"
              desc="kanye"
            ></SearchCard>
            <SearchCard
              src="./sample_album.png"
              title="Kanye"
              desc="kanye"
              href="http://google.com"
            ></SearchCard>
          </Box>
        </Box>
      </Box>
    </Standard>
  );
};
export default Search;
