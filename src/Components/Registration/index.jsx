import React from 'react'
import {
    Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link,
    Paper, Box, Grid, Typography, Select, InputLabel, FormControl
} from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import useStyles from './styles'
import { options } from './data'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Sharreit
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignupSide() {
    const classes = useStyles()
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container xs={12} spacing={3} display="flex" justify="space-between">
                            <Grid container xs={12}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirm_password"
                                    label="Repeat Password"
                                    type="password"
                                    id="confirm_password"
                                />
                                <Typography className={classes.addressText}>Address
                                <div className={classes.astrix}>&nbsp;*</div>
                                </Typography>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="street_address_1"
                                    label="Street Address"
                                    id="street_address_1"
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    name="street_address_2"
                                    label="Street Address 2"
                                    id="street_address_2"
                                />
                            </Grid>
                            <Grid container xs={12} justify="space-between" alignItems="stretch">
                                <Grid container xs={6}>
                                    <Grid item>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            name="city"
                                            label="City"
                                            id="city"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container xs={6} spacing={3}>
                                    <Grid item>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            name="state"
                                            label="State / Province"
                                            id="state"
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} spacing={3}>
                                    <Grid item xs={6}>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            name="zip_code"
                                            label="Postal / Zip Cide"
                                            id="zip_code"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <FormControl variant="outlined" className={classes.singularField}>
                                            <InputLabel htmlFor="country">Country</InputLabel>
                                            <Select
                                                required
                                                native
                                                label="Country"
                                                fullWidth
                                                inputProps={{
                                                    name: 'country',
                                                    id: 'country'
                                                }}
                                                name="country"
                                                >
                                                <option aria-label="None" value="" />
                                                {options.country.map(place => (
                                                    <option value={place}>{place}</option>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                        
                                <Grid container xs={6}>
                                    <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container xs={12} justify="space-between">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2"> Forgot password? </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
    );
}