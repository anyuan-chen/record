import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import theme from "../../styles/theme";
import { motion } from "framer-motion";
const ProgressElement = ({ activated, children, href }) => {
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
    <motion.a href={href}>
      <Box
        sx={activated ? activatedSx : unactivatedSx}
        component={motion.div}
        whileHover={{ backgroundColor: theme.palette.bgSecondary.darker }}
      >
        <Typography variant="h5" sx={activated ? { fontWeight: "bold" } : {}}>
          {children}
        </Typography>
      </Box>
    </motion.a>
  );
};
export default ProgressElement;
