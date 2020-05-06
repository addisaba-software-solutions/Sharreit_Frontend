import React from "react";
import Header from "../Headers&Footers/Header";
import Footer from "../Headers&Footers/Footer";
import classes from "./styles";
import { Divider, Grid, Box, Typography } from "@material-ui/core";
import Filter from "./components/filter";
import ItemsView from "./components/itemsView";

export default function ViewAllItems() {
  return (
    <>
      <div style={classes.appbarShift}>
        <Header />
      </div>
      <main style={classes.root}>
        <Grid container xs={12}>
          <Grid item xs={3}>
            <Filter />
            <Divider />
          </Grid>
          <Grid item xs={9}>
            <ItemsView />
            <Divider />
          </Grid>
        </Grid>
      </main>

      {/* <Footer /> */}
    </>
  );
}
