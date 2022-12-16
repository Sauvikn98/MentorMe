import React, { Component } from "react";
import {
  Grid,
  Paper,
} from "@mui/material";
import CreateAccount from "../../component/Steps/CreateAccount";
import PersonalInfo from "../../component/Steps/PersonalInfo";
import EducationalInfo from "../../component/Steps/EducationalInfo";
import ProfessionalInfo from "../../component/Steps/ProfessionalInfo";
import SubmittedData from "../../component/Steps/SubmittedData";
import EmailAndPassword from "../../component/Steps/EmailAndPassword";


class CreateProfile extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      
      nickName: "",
      familyName: "",
      gender: "",
      phone: "",
      address: "",

      qualificationDegree: "",
      collegeName: "",
      yearOfPassing: "",
      branch: "",

      skill: "",
      workExperence: "",
      currentJob: "",
      jobLocation: "",
    },
    errors: {},
    steps: [
      { label: "Email and Password" },
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
        ? (errors[target.name] = `${target.name} must have at least 4 letter`)
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
            <CreateAccount
            handleNext={handleNextStep}
          />
          );
        case 1:
          return (
            <EmailAndPassword
            state={this.state}
            handleChange={handleOnChange}
            handleNext = {handleNextStep}
            handlePrev={handleBackStep}
            />
          );
        case 2:
          return (
            <PersonalInfo
            state={this.state}
            handleChange={handleOnChange}
            handleNext = {handleNextStep}
            handlePrev={handleBackStep}
            />
          );
        case 3:
          return (
            <EducationalInfo
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 4:
          return (
            <ProfessionalInfo
              state={this.state}
              handleChange={handleOnChange}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        case 5:
          return <SubmittedData data={this.state.data} state={this.state} />;
        default:
          return (
            <CreateAccount
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
          <form onSubmit={this.handleSubmit}
            style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop:"20px",
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
