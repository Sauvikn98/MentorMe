import React, { Component } from "react";
import {
  Box,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import Step1 from "../../component/Steps/step1";
import Step2 from "../../component/Steps/step2";
import Step3 from "../../component/Steps/step3";
import FinalStep from "../../component/Steps/FinalStep";
import Step0 from "../../component/Steps/step0";

class CreateProfile extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",

      highestDegree: "",
      issuedBy: "",
      yearOfPassing: "",
      jobType: "",

      skill: "",
      jobApplyFor: "",
      workExperence: "",
      expectedSalary: "",
    },
    errors: {},
    steps: [
      { label: "Personal Bio" },
      { label: "Educational" },
      { label: "Professional" },
    ],
    stepCount: 0,
  };
  render() {

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted");
    };

    const handleOnChange = ({ target }) => {
      const { data, errors } = this.state;

      target.value.length <= 3
        ? (errors[target.name] = `${target.name} have at least 3 letter`)
        : (errors[target.name] = "");

      data[target.name] = target.value;
      this.setState({ data, errors });
    };

    const handleNextStep = () => {
      let { stepCount } = this.state;
      console.log("stepCount", stepCount);
      stepCount = stepCount + 1;
      this.setState({ stepCount });
    };
    const handleBackStep = () => {
      let { stepCount } = this.state;
      stepCount = stepCount - 1;
      this.setState({ stepCount });
    };

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Step0 
            handleNext = {handleNextStep} 
            />
          );
        case 1:
          return (
            <Step1
            state={this.state}
            handleChange={handleOnChange}
            handleNext = {handleNextStep}
            />
          );
        case 2:
          return (
            <Step2
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 3:
          return (
            <Step3
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        case 4:
          return <FinalStep data={this.state.data} state={this.state} />;
        default:
          return (
            <Step1
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
            />
          );
      }
    };

    return (
      <Grid container style={{display: "flex",
      flexFlow: "row Wrap",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh", backgroundImage: `var(--gradient-bg)`}}>
        <Grid item xs={12} sm={8}>
          <form onSubmit={this.handleSubmit} style={{
            padding: "20px",
            height: "auto",
  }}>
            <Paper  mb={1} pt={6}>
              
              {getStepContent(this.state.stepCount)}
            </Paper>
           
             
      
          </form>
        </Grid>
      </Grid>
    );
  }
}


export default (CreateProfile);
