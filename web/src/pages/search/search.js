import Standard from "../../components/layouts/standard";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { Typography } from "@mui/material";
import SearchBar from "../../components/search_bar/search_bar";
import SearchCard from "../../components/search_card/search_card";
import { useState } from "react";
import useFetch from "../../data/useFetch";

const Search = () => {
  const [req, setReq] = useState([
    {
      url: "http://localhost:8080/search",
      params: {
        query: "",
        queryType: ["track", "artist"],
      },
      responseType: "JSON",
    },
  ]);
  const { data, error, loading } = useFetch(req);
  if (error) {
    console.log(error);
  }
  console.log(data);
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
            height: "100vh",
          }}
        >
          <Typography
            variant="oversized"
            sx={{ color: theme.palette.tertiary.main }}
          >
            search
          </Typography>
          <SearchBar
            value={req[0].params.query}
            setValue={(val) => {
              setReq([
                {
                  ...req[0],
                  params: {
                    ...req[0].params,
                    query: val,
                  },
                },
              ]);
              console.log(req);
            }}
          ></SearchBar>
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
            {!loading &&
              !error &&
              data[0].tracks.items.map((searchResult) => {
                return (
                  <SearchCard
                    title={searchResult.name}
                    desc={searchResult.album.artists.reduce(
                      (prev, cur) => prev + " " + cur.name,
                      ""
                    )}
                    src={searchResult.album.images[0].url}
                  ></SearchCard>
                );
              })}
            {(loading || error) && <Box sx={{width: "100%"}}>&nbsp;</Box>}
          </Box>
        </Box>
      </Box>
    </Standard>
  );
};
export default Search;
