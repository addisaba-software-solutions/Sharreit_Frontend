import React from "react";
import { Typography, Grid, Paper, Card } from "@material-ui/core";
import carSVG from "../../../Assets/CarSVG.svg";
import homeSVG from "../../../Assets/homeSVG.svg";
import BuildingSVG from "../../../Assets/BuildingSVG.svg";
import clothingSVG from "../../../Assets/clothingSVG.svg";
import boatsSVG from "../../../Assets/boatsSVG.svg";
import electronicsSVG from "../../../Assets/electronicsSVG.svg";
import photography from "../../../Assets/productSharing/photography.svg";
import camping from "../../../Assets/productSharing/camping.svg";
import instrument from "../../../Assets/productSharing/instrument.svg";
import ladder from "../../../Assets/productSharing/ladder.svg";
import Lawn from "../../../Assets/productSharing/Lawn.svg";
import luggage from "../../../Assets/productSharing/luggage.svg";
import office from "../../../Assets/productSharing/office.svg";
import storage from "../../../Assets/productSharing/storage.svg";
import textbook from "../../../Assets/productSharing/textbook.svg";
import tools from "../../../Assets/productSharing/tools.svg";
import farming from "../../../Assets/productSharing/farming.svg";
import Picture from '../../../Assets/boats.jpg'
import { subCategories, categories, icons } from '../data'

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

export default function categoriesCard({ type }) {
  return (
    <Grid container xs={12} spacing={3} display>
      {
        subCategories[categories[type]].map((item, index) => (
          <Grid item xs={2}>
          <Card style={styles.root} onClick={() => alert("Building Materials")}>
            <Grid container xs={12}>
              <Grid item xs={12} align="center" style={styles.padding}>
                <img src={icons[categories[type]][index]} style={styles.SVG} alt="" />
              </Grid>
              <Grid item xs={12} align="center" style={styles.padding}>
                <Typography style={styles.CardTitle}>
                  {item}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        ))
      }
    </Grid>
  );
}
