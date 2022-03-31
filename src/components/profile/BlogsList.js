import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Blog from "./Blog";

const BlogsList = (props) => {
  const { title, blogs } = props;
  return (
    <Paper sx={{ mt: 2, mb: 2, p: 2, textAlign: "initial" }} elevation={3}>
      <Typography variant="h5">{title}</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {blogs.map((blog) => {
          return (
            <Grid item xs={2} sm={4} md={4} key={blog.id}>
              <Blog item={blog} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};
export default BlogsList;
