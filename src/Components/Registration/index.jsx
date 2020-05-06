import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Step,
  StepLabel,
  Stepper,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import { fields, options } from "./data";
import Logo from "../../Assets/Group.svg";
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
import clsx from "clsx";
import PersonalInformation from "./components/personalInformation";
import ImageUpload from "./components/imageUpload";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      SharreIt
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default function Registration() {
  const classes = useStyles();
  return (
    <>
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
          <Box className={classes.paper}>
            <img src={Logo} className={classes.Logo} alt="" />
            <Avatar className={classes.avatar}>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>

            <PersonalInformation />
          </Box>
          <Copyright />
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    </>
  );
}
