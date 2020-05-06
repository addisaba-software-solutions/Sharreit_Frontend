import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import image from "../../../Assets/Rental_house.jpg"

const classes = {
  root: {
    padding: 30,
    // backgroundColor: '#FFFFFF'
  },
  card: {
      padding: 30
  }
};

export default function ItemsView() {
  return (
    <Box style={classes.root}>
      <Grid container xs={12}>
        <Grid item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Typography>hello</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
