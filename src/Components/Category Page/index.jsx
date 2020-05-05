import React from "react";
import { Box, Paper } from "@material-ui/core";
import Header from "./components/AppBar";
import PremiumAd from "./components/PremiumAds/";
import Categories from "./components/categoriesCard";
import CarImage from '../../Assets/SomeCar.jpg'

import classes from "./styles";

const CategoriesView = () => {
  const routeChange = () => {
    this.props.history.push("/signIn");
  }

  const $ = (e) => document.getElementById(e)

  const scroll = (direction) => {
    //let far = $("premiumAdHolder").scrollWidth / 2 * direction
    //let pos = $("premiumAdHolder").animate({ scrollLeft: pos }, 1000)
  }

    
  const tempObject = {
    caption: 'An amazing sports car',
    picture: CarImage
  }
  const [ads, setAds] = React.useState({
    categories: Array(10).fill(tempObject)
  })

  return (
    <>
      <Box style={classes.root}>
        <Header />
        {/* End of AppBar Portion ? */}
        <Box style={{ height: 80 }} />
        {/* <div style={classes.premiumAdHolder} id="premiumAdHolder">
          <a onClick={scroll.bind(null, -1)}>&#10094;</a>
          {
            ads.categories.map((item, index) => (
              <PremiumAd caption={item.caption} picture={item.picture} key={index} style={classes.premiumAd} />
            ))
          }
          <a onClick={scroll.bind(null, 1)}>&#10094;</a>
        </div> */}
        { <Categories /> }
      </Box>
    </>
  );
}

export default CategoriesView
