import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Post() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image="https://images.pexels.com/photos/747101/pexels-photo-747101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          New York City
        </Typography>
        <Typography variant="body2" color="text.secondary">
          New York City comprises 5 boroughs sitting where the Hudson River
          meets the Atlantic Ocean. At its core is Manhattan, a densely
          populated borough that’s among the world’s major commercial, financial
          and cultural centers. Its iconic sites include skyscrapers such as the
          Empire State Building and sprawling Central Park. Broadway theater is
          staged in neon-lit Times Square.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
