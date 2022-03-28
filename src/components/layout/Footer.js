import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

function Copyright() {
  return (
    <Box>
      <Divider variant="middle" sx={{ m: 3 }} />
      <Typography variant="body1" color="text.secondary">
        {"Powered by © "}
        <Link color="inherit" href="/">
          T-blog
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          My sticky footer can be found here.
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
};
export default Footer;
