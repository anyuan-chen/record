import { createTheme, responsiveFontSizes } from "@mui/material/styles";
let theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecorationColor: "#532A10",
        },
      },
    },
  },
  palette: {
    primary: { main: "rgba(255,255,255,0.95)" },
    secondary: { main: "rgba(255,255,255,0.6)" },
    "bg-primary": { main: "rgba(18,18,18,0.97)" },
    "bg-secondary": { main: "rgba(230,246,255,0.125)" },
    "bg-tertiary": { main: "rgba(18,18,18,0.125)" },
  },
  typography: {
    oversize: {
      fontSize: "8rem",
      fontWeight: "bold",
      fontFamily: "Circular Std",
    },
    h0: {
      fontSize: "6rem",
      fontWeight: "bold",
      fontFamily: "Circular Std",
    },
    h1: {
      fontSize: "3.812rem",
      fontWeight: "bold",
      fontFamily: "Circular Std",
    },
    h2: {
      fontWeight: "400",
      fontSize: "3.062rem",
      fontFamily: "Circular Std",
    },
    h3: {
      fontWeight: "400",
      fontSize: "2.438rem",
      fontFamily: "Circular Std",
    },
    h4: {
      fontWeight: "400",
      fontSize: "1.938rem",
      fontFamily: "Circular Std",
    },
    h5: {
      fontWeight: "400",
      fontSize: "1.562rem",
      fontFamily: "Circular Std",
    },
    b1: {
      fontWeight: "300",
      fontSize: "1.250rem",
      fontFamily: "Circular Std",
    },
    b2: {
      fontWeight: "300",
      fontSize: 1.0,
      fontFamily: "Circular Std",
    },
  },
});
theme.spacing(16);

theme = responsiveFontSizes(theme);

export default theme;
