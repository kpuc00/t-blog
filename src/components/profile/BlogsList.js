import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import Blog from "./Blog";

const BlogsList = (props) => {
  const { title, blogs, btnAction } = props;
  return (
    <Paper sx={{ mt: 2, mb: 2, p: 2, textAlign: "initial" }} elevation={3}>
      <Stack direction="row" justifyContent="space-between" sx={{ pb: 3 }}>
        <Typography variant="h5">{title}</Typography>
        {title && title === "Your blogs" && (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={btnAction}
          >
            Create blog
          </Button>
        )}
      </Stack>

      {Array.isArray(blogs) && blogs.length > 0 ? (
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
      ) : (
        <Box textAlign="center">
          <Typography variant="h6">
            Begin with creating your first blog!
          </Typography>
        </Box>
      )}
    </Paper>
  );
};
export default BlogsList;
