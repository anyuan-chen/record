import { Box } from "@mui/system";
const Standard = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        background:
          "linear-gradient(0deg, rgba(18, 18, 18, 0.85), rgba(18, 18, 18, 0.85)), conic-gradient(from -79.8deg at 50% 50%, #FF6FDF 0deg, rgba(0, 0, 0, 0) 360deg), conic-gradient(from 117.72deg at 11.22% 42.53%, #92F09B 0deg, rgba(0, 0, 0, 0) 360deg), conic-gradient(from 25.1deg at 1.28% 101.27%, #81EFF7 0deg, rgba(0, 0, 0, 0) 295.57deg, #81EFF7 360deg), conic-gradient(from -71.19deg at 101.53% 107.08%, #FFFFFF 0deg, #ED7070 360deg)",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backdropFilter: "blur(100px)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default Standard;
