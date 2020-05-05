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
import clsx from 'clsx';
import PersonalInformation from "./components/personalInformation";
import ImageUpload from "./components/imageUpload";

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

export default function SignupSide() {
  const classes = useStyles();

  const steps = ["Personal Information", "Image Upload"];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalInformation />;
      case 1:
        return <ImageUpload />;
      default:
        throw new Error("Unknown step");
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

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
        <Box className={classes.paper}>
          <img src={Logo} className={classes.Logo} alt="" />
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Stepper activeStep={activeStep} color='secondary' className={classes.stepper}>
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
                  Registered
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}
                
                className={clsx(classes.buttons, classes.active
                )}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.submit}
                  >
                    {activeStep === steps.length - 1 ? "Register" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Box>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
