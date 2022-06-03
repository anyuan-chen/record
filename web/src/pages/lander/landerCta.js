import React from "react";
import { Typography } from "@mui/material";
import Cta from "../../components/cta/cta";
import Box from "@mui/material";
import theme from "../../styles/theme";
import IconButton from "../../components/buttons/icon_button";
export default function LanderCta() {
  return (
    <Cta src={["/sample_album.png", "/sample_album.png", "/sample_album.png"]}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: theme.spacing(2),
          color: "white",
        }}
      >
        <Typography variant="h3">find out, if you please</Typography>
        <Typography variant="b1">
          don’t worry - we won’t change your <br></br> precious playlists.
        </Typography>
      </Box>
      <IconButton src="/spotify.svg">login to spotify</IconButton>
    </Cta>
  );
}
