import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { BlogsList, Footer, Navbar } from "../components";
import {
  getCurrentUser,
  selectLoading,
  selectUserData,
} from "../features/user/userSlice";
import {
  createBlog,
  getOwnBlogs,
  selectBlogs,
} from "../features/blog/blogSlice";

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

// const blogs = [
//   { id: 1, title: "Blog 1", img: "img 1" },
//   { id: 2, title: "Blog 2", img: "img 2" },
//   { id: 3, title: "Blog 3", img: "img 3" },
//   { id: 4, title: "Blog 4", img: "img 4" },
//   { id: 5, title: "Blog 5", img: "img 5" },
// ];

const other = [];

const Profile = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const userData = useSelector(selectUserData);
  const blogs = useSelector(selectBlogs);

  useEffect(() => {
    console.log("userData", userData);
    if (!userData) dispatch(getCurrentUser());
    dispatch(getOwnBlogs());
  }, [dispatch, userData]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateBlog = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name").trim();
    const description = data.get("description").trim();
    console.log({ name, description });
    dispatch(createBlog({ name, description }));
    handleClose();
  };

  return loading || !userData ? (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <CircularProgress size={100} />
      </Grid>
    </Grid>
  ) : (
    <>
      <Navbar />
      {userData && (
        <StyledBox sx={{ pt: 3, pb: 3 }}>
          <Stack alignItems="center">
            <Avatar
              className={classes.avatar}
              alt={`${userData.first_name} ${userData.last_name}`}
              src="/static/images/avatar/1.jpg"
            />
            <Typography variant="h5">{`${userData.first_name} ${userData.last_name}`}</Typography>
          </Stack>
          <BlogsList
            title="Your blogs"
            blogs={blogs}
            btnAction={handleClickOpen}
          />
          {other.length > 0 && <BlogsList title="Other blogs" blogs={other} />}
        </StyledBox>
      )}

      <Dialog
        component="form"
        onSubmit={handleCreateBlog}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Create a new blog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide details for the new blog.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton type="submit" variant="contained">
            Create
          </LoadingButton>
        </DialogActions>
      </Dialog>

      <Footer />
    </>
  );
};
export default Profile;
