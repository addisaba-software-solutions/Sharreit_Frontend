import React from 'react'
import useStyles from './styles'
import CarImage from '../../../Assets/SomeCar.jpg'

const SliderParent = () => {
    const classes = useStyles()
    const tempObject = {
        caption: "An incredile sports car.",
        picture: CarImage
    }

    const images = Array(10).fill(tempObject)

    const scrollHandler = () => {

    }

    const child = { width: `30em` , height: `100%` }
    const parent = { width: `60em`, height: `100%`, backgrounColor: 'blue' }

    return (
        <div style={parent}>
            <div style={child}></div>
            <div style={child}></div>
            <div style={child}></div>
            <div style={child}></div>
        </div>
    )
}

export default SliderParent