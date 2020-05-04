import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import { options } from "./data";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Logo from "../../Assets/Group.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      iWork PLC
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignInSide() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.paperContainer}
      >
        <div className={classes.paper}>
          <img src={Logo} className={classes.Logo} alt="" />

          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
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
            <Typography className={classes.addressText}>Address</Typography>

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
            <Grid container xs={12} display="flex" justify="space-between">
              <Grid item xs={6}>
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
              <Grid item xs={5}>
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
            <Grid container xs={12} display="flex" justify="space-between">
              <Grid item xs>
                <FormControl
                  variant="outlined"
                  className={classes.singularField}
                >
                  <InputLabel htmlFor="country">Country</InputLabel>
                  <Select
                    required
                    fullWidth
                    label="Country"
                    inputProps={{
                      name: "country",
                      id: "country",
                    }}
                    className={classes.controlFields}
                    name="country"
                  >
                    <option aria-label="None" value="" />
                    {options.country.map((place) => (
                      <option value={place}>{place}</option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={7}>
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
            </Grid>

            <Grid xs={12} align="center">
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                className={classes.submit}
                // onClick={handleClick}
                href="/CategoryPage"
              >
                Register
              </Button>
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
