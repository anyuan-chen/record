import Standard from "../../components/layouts/standard";
import { Box } from "@mui/system";
import theme from "../../styles/theme";
import { Typography } from "@mui/material";
import IconButton from "../../components/buttons/icon_button";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../data/useFetch";
import Loading from "../loading";
import Graph from "../../components/bar_graph/graph";
import GraphItem from "../../components/bar_graph/item";
const Song = () => {
  const [searchParams] = useSearchParams();
  const [req, setReq] = useState([
    {
      url: "http://localhost:8080/gettrackinfo",
      params: {
        id: searchParams.get("id"),
      },
      responseType: "JSON",
    },
    {
      url: "http://localhost:8080/gettrackfeatures",
      params: {
        id: searchParams.get("id"),
      },
      responseType: "JSON",
    },
  ]);

  const { data, error, loading } = useFetch(req);
  if (error) {
    console.log(error);
  }
  return loading ? (
    <Loading></Loading>
  ) : (
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
            minHeight: "100vh",
            py: theme.spacing(6),
            rowGap: theme.spacing(5),
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.bgSecondary.darker,
              borderRadius: theme.spacing(2),
              py: theme.spacing(8),
              px: theme.spacing(8),
              display: "flex",
              flexDirection: "column",
              rowGap: theme.spacing(4),
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
                >
                  {data[0].name}
                </Typography>
                <Typography variant="h4">
                  {data[0].artists
                    .reduce((prev, cur) => prev + cur.name + ", ", "")
                    .substring(
                      0,
                      data[0].artists.reduce(
                        (prev, cur) => prev + cur.name + ", ",
                        ""
                      ).length - 2
                    )}
                </Typography>
                <Typography variant="h5">
                  {data[0].album.name} ·{" "}
                  {data[0].album.release_date.substring(0, 4)}
                </Typography>
                <IconButton
                  textVariant="b1"
                  textSx={{
                    fontWeight: "bold",
                  }}
                  href={data[0].uri}
                >
                  play on spotify
                </IconButton>
              </Box>
              <Box>
                <img
                  src={data[0].album.images[0].url}
                  style={{ width: "300px", height: "300px" }}
                  alt="album cover"
                ></img>
              </Box>
            </Box>
            <Box>
              <Graph>
                <GraphItem
                  title="acousticness"
                  height="50px"
                  percentage={Math.round(data[1][0].acousticness * 100)}
                ></GraphItem>
                <GraphItem
                  title="dancability"
                  height="50px"
                  percentage={Math.round(data[1][0].danceability * 100)}
                ></GraphItem>
                <GraphItem
                  title="energy"
                  height="50px"
                  percentage={Math.round(data[1][0].energy * 100)}
                ></GraphItem>
                <GraphItem
                  title="valence"
                  height="50px"
                  percentage={Math.round(data[1][0].valence * 100)}
                ></GraphItem>
                <GraphItem
                  title="liveness"
                  height="50px"
                  percentage={Math.round(data[1][0].liveness * 100)}
                ></GraphItem>
              </Graph>
            </Box>
          </Box>
        </Box>
      </Box>
    </Standard>
  );
};
export default Song;
