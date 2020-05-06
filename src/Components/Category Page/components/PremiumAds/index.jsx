import React from "react";
import { Typography, Card ,Paper, CardContent, CardHeader, CardActionArea, CardMedia } from "@material-ui/core";
import useStyles from './styles'
import Picture from '../../../../Assets/SomeCar.jpg'
import {
    Visibility
} from '@material-ui/icons'

export default function PremiumAds({ caption, picture }) {
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.image}>
                <img src={picture} alt="Car" className={classes.image} />
            </CardMedia>
        </Card>
);
}