import React, { useEffect } from 'react'
import { Grid, Zoom } from '@material-ui/core'
import useStyles from './styles'
import image from './img/download.jpg'

const Example = ({ start }) => {
    const classes = useStyles()
    const AMOUNT_OF_BUBBLES = 6
    const [state, setState] = React.useState({
        cars: Array(AMOUNT_OF_BUBBLES).fill(false),
    })

    const MAX_BUBBLES = state.cars.length
    var counter = 0

    useEffect(() => {
        if (!start) {
            return
        } else if (state.cars[0]) {
            return
        }
        startAnimation()
    })

    const startAnimation = () => {
        var { cars } = state
        cars[counter] = !cars[counter]
        setState({ cars })
        if (MAX_BUBBLES > counter + 1) {
            counter++
            setTimeout(startAnimation, 500)
        }
    }

    return (
        <Grid className={classes.root} container xs={12}>
            <Grid container xs={12} className={classes.root}>
                {
                    state.cars.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Zoom in={state.cars[index]} timeout={1000}>
                                <img src={image} className={classes.animated} alt="Car" />
                            </Zoom>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default Example