import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ProgressElement = ({ activated, children, href }) => {
  const unactivatedSx = {
    borderRadius: theme.spacing(4),
    px: theme.spacing(8),
    py: theme.spacing(2.5),
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
    <a href={href}>
      <Box
        sx={activated ? activatedSx : unactivatedSx}
        component={motion.div}
        whileHover={{ backgroundColor: theme.palette.bgSecondary.darker }}
      >
        <Typography variant="h5" sx={activated ? { fontWeight: "bold" } : {}}>
          {children}
        </Typography>
      </Box>
    </a>
  );
};
export default ProgressElement;
