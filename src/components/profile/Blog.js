import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Blog = (props) => {
  const { item } = props;
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={item.logo}
        alt={item.title + " logo"}
      />
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          {item.title}
        </Typography>
        <Button size="small" href={"#" + item.id}>
          Manage
        </Button>
      </CardActions>
    </Card>
  );
};
export default Blog;
