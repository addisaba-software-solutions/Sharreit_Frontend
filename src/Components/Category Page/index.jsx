import React from "react";
import { Box, Paper } from "@material-ui/core"
import Header from "./components/AppBar";
import PremiumAd from "./components/PremiumAds/";
import Categories from "./components/categoriesCard";
import CarImage from "../../Assets/SomeCar.jpg";
import classes from "./styles";
import routes from '../../Config/routes'

const CategoriesView = () => {
  const routeChange = () => {
    this.props.history.push(routes.signIn);
  };

  const scrollRef = React.useRef(null)

  const tempObject = {
    caption: "An amazing sports car",
    picture: CarImage,
  }

  const [ads, setAds] = React.useState({
    categories: Array(11).fill(tempObject),
  })

  const SCROLL_THRESHOLD = 200
  var SCROLLED_AMOUNT = 0
  const WAIT_TIME = 300
  const MAX_WIDTH = (ads.categories.length - 3.5) * 420
  var direction = "right"

  const goLeft = () => {
    direction = "left"
    SCROLLED_AMOUNT -= SCROLL_THRESHOLD
    scrollRef.current.scrollLeft -= SCROLL_THRESHOLD
  }

  const goRight = () => {
    direction = "right"
    SCROLLED_AMOUNT += SCROLL_THRESHOLD
    scrollRef.current.scrollLeft += SCROLL_THRESHOLD
  }

  const infiniteScroller = () => {
    if (SCROLLED_AMOUNT >= MAX_WIDTH) {
      if (direction === "right") {
        direction = "left"
      }
    } else if (SCROLLED_AMOUNT <= 0) {
      if (direction === "left") {
        direction = "right"
      }
    }
    direction === "left"?  goLeft() : goRight()
    setTimeout(() => infiniteScroller(), WAIT_TIME)
  }

  React.useEffect(() => {
      infiniteScroller()
  })

  return (
    <>
      <Box style={classes.root}>
        <Header />
        {/* End of AppBar Portion ? */}
        <Box style={{ height: 80 }} />
          <div style={classes.scrollWrapper} ref={scrollRef}>
            {ads.categories.map((item, index) => (
                <div style={classes.card}>
                  <PremiumAd caption={item.caption + " " + index} picture={item.picture} />
              </div>
            ))}
          </div>
          <button onClick={goLeft}>Go Left</button>
          <button onClick={goRight}>Go Right</button>
        {<Categories />}
      </Box>
    </>
  );
};

export default CategoriesView;
