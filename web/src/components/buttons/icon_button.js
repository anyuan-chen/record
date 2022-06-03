import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import { Box } from "@mui/system";
const IconButton = ({ src, children, onClick, href }) => {
  return (
    <a href={href}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: theme.palette.bgPrimary.main,
          color: theme.palette.primary.main,
          border: "none",
          px: theme.spacing(4),
          py: theme.spacing(2),
          cursor: "pointer",
          columnGap: theme.spacing(2),
          alignItems: "center",
          justifyContent: "center",
          borderRadius: theme.spacing(3),
        }}
        component="button"
        onClick={onClick}
      >
        {src ? <img src={src} alt="icon"></img> : <></>}
        <Typography variant="h4" component="h3">
          {children}
        </Typography>
      </Box>
    </a>
  );
};
export default IconButton;
