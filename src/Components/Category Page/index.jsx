import React from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";
import Header from "../Headers&Footers/Header";
// import PremiumAd from "./components/PremiumAds/";
import Categories from "./components/categoriesCard";
import CarImage from "../../Assets/SomeCar.jpg";
import classes from "./styles";
import routes from "../../Config/routes";
import Something from "../../Assets/Rentalhouse.jpg";
import PremiumAds from "./components/PremiumAds";


const CategoriesView = () => {


  // const scrollRef = React.useRef(null);

  // const tempObject = {
  //   caption: "An amazing sports car",
  //   picture: CarImage,
  // };

  // const [ads, setAds] = React.useState({
  //   categories: Array(11).fill(tempObject),
  // });

  // const SCROLL_THRESHOLD = 50;
  // var SCROLLED_AMOUNT = 0;
  // const WAIT_TIME = 70;
  // const MAX_WIDTH = (ads.categories.length + ads.categories.length) * 420;
  // var direction = "right";

  // const goLeft = () => {
  //   direction = "left";
  //   SCROLLED_AMOUNT -= SCROLL_THRESHOLD;
  //   scrollRef.current.scrollLeft -= SCROLL_THRESHOLD;
  // };

  // const goRight = () => {
  //   direction = "right";
  //   SCROLLED_AMOUNT += SCROLL_THRESHOLD;
  //   scrollRef.current.scrollLeft += SCROLL_THRESHOLD;
  // };

  // const infiniteScroller = () => {
  //   if (SCROLLED_AMOUNT >= MAX_WIDTH) {
  //     if (direction === "right") {
  //       direction = "left";
  //     }
  //   } else if (SCROLLED_AMOUNT <= 0) {
  //     if (direction === "left") {
  //       direction = "right";
  //     }
  //   }
  //   direction === "left" ? goLeft() : goRight();
  //   setTimeout(() => infiniteScroller(), WAIT_TIME);
  // };

  // React.useEffect(() => {
  //   infiniteScroller();
  // });

  return (
    <>
      <Box style={classes.root}>
        <Header />
        <Box style={{ height: 80 }} />
        <Grid xs={12} align="center">
          <Typography glutterBottom style={classes.Headertext1}>
            Category Info Goes Here
          </Typography>
        </Grid>
        <PremiumAds />
        <Typography style={classes.Headertext2} glutterBottom>
          Sub-Categories Under Some Category
        </Typography>
        {<Categories />}
        {<Categories />}
        {<Categories />}
      </Box>
    </>
  );
};

export default CategoriesView;
