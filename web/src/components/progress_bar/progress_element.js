import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import theme from "../../styles/theme";
const ProgressElement = ({ activated, children }) => {
  const unactivatedSx = {
    borderRadius: theme.spacing(4),
    px: theme.spacing(11),
    py: theme.spacing(2),
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const activatedSx = {
    ...unactivatedSx,
    backgroundColor: theme.palette.bgSecondary.main,
  };

  return (
    <Box sx={activated ? activatedSx : unactivatedSx}>
      <Typography variant="h5" sx={activated ? { fontWeight: "bold" } : {}}>
        {children}
      </Typography>
    </Box>
  );
};
export default ProgressElement;
