import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { BlogsList, Footer, Navbar } from "../components";

const PREFIX = "Profile";

const classes = {
  avatar: `${PREFIX}-avatar`,
};

const StyledBox = styled(Box)(({ theme }) => ({
  [`& .${classes.avatar}`]: {
    width: "100px",
    height: "100px",
  },
}));

const blogs = [
  { id: 1, title: "Blog 1", img: "img 1" },
  { id: 2, title: "Blog 2", img: "img 2" },
  { id: 3, title: "Blog 3", img: "img 3" },
  { id: 4, title: "Blog 4", img: "img 4" },
  { id: 5, title: "Blog 5", img: "img 5" },
];

const other = [
  { id: 1, title: "Other blog 1", img: "img 1" },
  { id: 2, title: "Other blog 2", img: "img 2" },
];

const Profile = () => {
  return (
    <div>
      <Navbar />
      <StyledBox sx={{ pt: 3, pb: 3 }}>
        <Stack alignItems="center">
          <Avatar
            className={classes.avatar}
            alt="John Doe"
            src="/static/images/avatar/1.jpg"
          />
          <Typography variant="h5">John Doe</Typography>
        </Stack>
        <BlogsList title="Your blogs" blogs={blogs} />
        <BlogsList title="Other blogs" blogs={other} />
      </StyledBox>
      <Footer />
    </div>
  );
};
export default Profile;
