import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import Something from "../../../Assets/Rentalhouse.jpg";

const classes = {
  root: {
    padding: 50,
    borderRadius: 10,
  },
  image: {
    minHeight: 500,
    maxHeight: 500,
    borderRadius: 10,
  },
  otherImages: {
    height: 111,
    borderRadius: 10,
  },
  title: {
    paddingBottom: 10,
  },
};
export default function itemView() {
  return (
    <Paper style={classes.root}>
      {" "}
      <Grid xs={12} style={classes.title}>
        <Typography variant="h4">Item title Goes Here</Typography>
      </Grid>
      <Grid container xs={12}>
        <Grid xs={7}>
          <img src={Something} style={classes.image} alt="" />
          <Grid container spacing={3}>
            <Grid item align="center">
              <img src={Something} style={classes.otherImages} alt="" />
            </Grid>
            <Grid item>
              <img
                align="center"
                src={Something}
                style={classes.otherImages}
                alt=""
              />
            </Grid>
            <Grid item>
              <img
                align="center"
                src={Something}
                style={classes.otherImages}
                alt=""
              />
            </Grid>
            <Grid item>
              <img
                align="center"
                src={Something}
                style={classes.otherImages}
                alt=""
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid xs={5}>
          <Typography align="left">dfjsldfkjsdlk</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
