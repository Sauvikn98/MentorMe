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
    steps: [
      { label: "Create Account" },
      { label: "Educational" },
      { label: "Professional" },
    ],
    stepCount: 0,
    account_type: "mentor"
  };
  render() {

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("form submitted");
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
    const handleAccountType = (newData)=> {
      let {account_type} = this.state;
      console.log({newData})
      this.setState({account_type: newData})
    }

    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <CreateAccount
            handleAccountType={handleAccountType}
            handleNext={handleNextStep}
          />
          );
        case 1:
          return (
            <EmailAndPassword
            state={this.state}
            handleNext = {handleNextStep}
            handlePrev={handleBackStep}
            />
          );
        case 2:
          return (
            <EducationalInfo
              state={this.state}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
            />
          );
        case 3:
          return (
            <ProfessionalInfo
              state={this.state}
              handleNext={handleNextStep}
              handlePrev={handleBackStep}
              handleSubmit={handleSubmit}
            />
          );
        default:
          return (
            <CreateAccount
              state={this.state}
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
