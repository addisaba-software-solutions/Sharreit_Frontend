import React from "react";
import { Typography, Grid, Paper, Card } from "@material-ui/core";
import carSVG from "../../../Assets/CarSVG.svg";
import homeSVG from "../../../Assets/homeSVG.svg";
import BuildingSVG from "../../../Assets/BuildingSVG.svg";
import clothingSVG from "../../../Assets/clothingSVG.svg";
import boatsSVG from "../../../Assets/boatsSVG.svg";
import electronicsSVG from "../../../Assets/electronicsSVG.svg";

const styles = {
  root: {
    padding: 20,
    height: "auto",
    borderRadius: 5,
  },
  SVG: {
    height: 60,
    color: "#FFFFFF",
  },
  CardTitle: {
    color: "#7d7d7d",
    fontSize: 15,
    fontWeight: 600,
  },
  padding: {
    padding: 5,
  },
};

export default function categoriesCard() {
  return (
    <Grid container xs={12} spacing={3} display>
      <Grid item xs={2}>
        <Card style={styles.root} onClick={() => alert("Vehicles Category")}>
          <Grid container xs={12}>
            <Grid item xs={12} align="center" style={styles.padding}>
              <img src={carSVG} style={styles.SVG} alt="" />
            </Grid>
            <Grid item xs={12} align="center" style={styles.padding}>
              <Typography style={styles.CardTitle}>Vehicles</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card
          style={styles.root}
          onClick={() => alert("Apartments and Houses")}
        >
          <Grid container xs={12}>
            <Grid item xs={12} align="center" style={styles.padding}>
              <img src={homeSVG} style={styles.SVG} alt="" />
            </Grid>
            <Grid item xs={12} align="center" style={styles.padding}>
              <Typography style={styles.CardTitle}>
                Apartments and Houses
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card style={styles.root} onClick={() => alert("Building Materials")}>
          <Grid container xs={12}>
            <Grid item xs={12} align="center" style={styles.padding}>
              <img src={BuildingSVG} style={styles.SVG} alt="" />
            </Grid>
            <Grid item xs={12} align="center" style={styles.padding}>
              <Typography style={styles.CardTitle}>
                Building Materials
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card style={styles.root} onClick={() => alert("Clothing Materials")}>
          <Grid container xs={12}>
            <Grid item xs={12} align="center" style={styles.padding}>
              <img src={clothingSVG} style={styles.SVG} alt="" />
            </Grid>
            <Grid item xs={12} align="center" style={styles.padding}>
              <Typography style={styles.CardTitle}>
                Clothing Materials
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card style={styles.root} onClick={() => alert("Boats And Yachts")}>
          <Grid container xs={12}>
            <Grid item xs={12} align="center" style={styles.padding}>
              <img src={boatsSVG} style={styles.SVG} alt="" />
            </Grid>
            <Grid item xs={12} align="center" style={styles.padding}>
              <Typography style={styles.CardTitle}>Boats And Yachts</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={2}>
        <Card
          style={styles.root}
          onClick={() => alert("Home Appliances Category")}
        >
          <Grid container xs={12}>
            <Grid item xs={12} align="center" style={styles.padding}>
              <img src={electronicsSVG} style={styles.SVG} alt="" />
            </Grid>
            <Grid item xs={12} align="center" style={styles.padding}>
              <Typography style={styles.CardTitle}>Home Appliances</Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
