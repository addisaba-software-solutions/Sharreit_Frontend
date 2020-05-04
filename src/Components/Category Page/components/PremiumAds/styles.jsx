import { makeStyles } from '@material-ui/core'
import Colors from '../../../../Config/config'

export default makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        borderRadius: 10,
        width: 300,
        height: 150,
        flexDirection: "column",
        marginRight: 20,
        marginBottom: 20,
        marginTop: 10
    },

    image: {
        width: 300,
        height: 125
    },

    actionArea: {
        backgroundColor: "#376ec1",
        height: 25,
        color: '#fff',
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    cardText: {
        fontWeight: 500
    }
}))