import React, { useEffect } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
  Link,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navbar } from "../../components";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import ArticleIcon from "@mui/icons-material/Article";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ForumIcon from "@mui/icons-material/Forum";
import PagesIcon from "@mui/icons-material/Pages";
import SettingsIcon from "@mui/icons-material/Settings";
import PreviewIcon from "@mui/icons-material/Preview";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  selectLoading as selectUsrLoad,
  selectUserData,
} from "../../features/user/userSlice";
import {
  getBlogById,
  selectLoading as selectBlogLoad,
  selectSelectedBlog,
} from "../../features/blog/blogSlice";

const drawerWidth = 240;

const Dashboard = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const userLoading = useSelector(selectUsrLoad);
  const blogLoading = useSelector(selectBlogLoad);
  const userData = useSelector(selectUserData);
  const selectedBlog = useSelector(selectSelectedBlog);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/dashboard") navigate("/dashboard/articles");
  });

  useEffect(() => {
    console.log("userData", userData);
    if (!userData) dispatch(getCurrentUser());
    dispatch(getBlogById(blogId));
  }, [blogId, dispatch, userData]);

  return userLoading || !userData ? (
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
    <Box sx={{ display: "flex" }}>
      <Navbar position="fixed" />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {blogLoading || !selectedBlog ? (
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
          <Box sx={{ overflow: "auto" }}>
            <Box sx={{ display: "flex", flexDirection: "column", m: 2 }}>
              <Typography variant="h5" sx={{ textAlign: "left", mb: 1 }}>
                {selectedBlog.name}
              </Typography>
              <Button variant="contained" startIcon={<AddIcon />}>
                New article
              </Button>
            </Box>

            <Divider />
            <List>
              <ListItemButton component={Link} to="/dashboard/articles">
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Articles" />
              </ListItemButton>
              <ListItemButton component={Link} to="/dashboard/statistics">
                <ListItemIcon>
                  <AnalyticsIcon />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItemButton>
              <ListItemButton component={Link} to="/dashboard/comments">
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Comments" />
              </ListItemButton>
              <ListItemButton component={Link} to="/dashboard/pages">
                <ListItemIcon>
                  <PagesIcon />
                </ListItemIcon>
                <ListItemText primary="Pages" />
              </ListItemButton>
              <ListItemButton component={Link} to="/dashboard/settings">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </List>
            <Divider />
            <List>
              <ListItemButton dense>
                <ListItemIcon>
                  <PreviewIcon />
                </ListItemIcon>
                <ListItemText primary="Preview blog" />
              </ListItemButton>
            </List>
          </Box>
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
export default Dashboard;
