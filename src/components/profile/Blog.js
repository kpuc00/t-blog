import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
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
        alt={item.name + " logo"}
      />
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          {item.name}
        </Typography>
        <Link to={`/${item.id}/dashboard`}>
          <Button size="small">Manage</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
export default Blog;
