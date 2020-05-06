import React from "react";
import { Box, Button, Fade } from "@material-ui/core"
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
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
    categories: Array(11).fill(tempObject)
  })

  const [hover, setHover] = React.useState(false)

  const SCROLL_THRESHOLD = 50
  var SCROLLED_AMOUNT = 0
  const WAIT_TIME = 70
  const MAX_WIDTH = (ads.categories.length * 10) * 500
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

  const infiniteScroller = async () => {
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
  }

  React.useEffect(() => {
    setInterval(() => infiniteScroller(), WAIT_TIME);
  })

  return (
    <>
      <Box style={classes.root}>
        <Header />
        {/* End of AppBar Portion ? */}
        <Box style={{ height: 80 }} />
          <div style={classes.scrollWrapper} ref={scrollRef}>
            {ads.categories.map((item, index) => (
                <div style={classes.card} key={index}>
                  <PremiumAd caption={item.caption + " " + index} picture={item.picture} />
              </div>
            ))}
          </div>
          {/* <Fade in={hover} timeout={700}>
            <Button style={classes.leftButton} onClick={goLeft}>
                <ChevronLeft />
            </Button>
          </Fade> */}
        {<Categories />}
      </Box>
    </>
  );
};

export default CategoriesView;
