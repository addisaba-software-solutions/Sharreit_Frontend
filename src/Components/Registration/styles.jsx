import { makeStyles } from "@material-ui/core";
import houseImage from '../../Assets/Rentalhouse.jpg'

export default makeStyles(theme => ({
    root: {
        height: '100vh',
        marginRight: 300,
    },
    image: {
        backgroundImage: `url(${houseImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },

    addressText: {
        fontSize: 20,
        fontWeight: 750
    },

    minimalTextFields: {
        display: 'flex',
        flexDirection: 'row'
    },

    address_city: {
        marginRight: 20,
        width: 235
    },

    address_state: {
        width: 243
    }
}))