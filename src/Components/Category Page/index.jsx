import React from "react";

import classes from "./styles";

import { Box } from "@material-ui/core";
import Header from "./components/AppBar";
import PremiumAds from "./components/PremiumAds";
import Categories from "./components/categoriesCard";

class LandingPage extends React.Component {
  routeChange() {
    this.props.history.push("/signIn");
  }
  render() {
    return (
      <>
        <Box style={classes.root}>
          <Header />
          {/* End of AppBar Portion ? */}
          <Box style={{ height: 80 }} />
          <PremiumAds />
          {/* <Categories /> */}
        </Box>
      </>
    );
  }
}

export default LandingPage;
