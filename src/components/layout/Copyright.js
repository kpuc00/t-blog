import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

export default function Copyright() {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Divider variant="middle" sx={{ m: 3 }} />
      <Typography variant="body2" color="text.secondary">
        {"Powered by © "}
        <Link color="inherit" href="/">
          T-blog
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
