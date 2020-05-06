


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
import clsx from "clsx";
import PersonalInformation from "./components/personalInformation";
import ImageUpload from "./components/imageUpload";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      SharreIt :   
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const steps = ['Personal Information', 'Something Something', 'Something Something'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInformation />
    case 1:
      return <Typography>
      one
    </Typography>;
    case 2:
      return <Typography>
      two
    </Typography>;
    default:
      throw new Error('Unknown step');
  }
}
export default function Registration() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
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
        <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>

      

          </Box>
          <Copyright />
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    </>
  );
}