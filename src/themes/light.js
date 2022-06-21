import { createTheme } from "@mui/material/styles";

const primaryColor = "#5E091D";
const secondaryColor = "#747474";

const light = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});

export default light;
