import React from "react";
import { Box, Grid} from "@mui/material";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderStepper,
  renderText,
} from "../common/displayComponent";

const EmailAndPassword = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Box style={{paddingLeft: "40px", paddingTop:"60px", paddingBottom:"60px", paddingRight:"40px", justifyContent:"center", alignItems:"center"}}>
       {renderStepper({state})}
      <Box pt={6} pb={6}>
        {renderText({
          label: "Create Login Credentials",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
       
      </Box>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "firstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>   
     

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            type: "email",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderInputField({
            state,
            name: "password",
            label: "New Password",
            type: "password",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderInputField({
            state,
            name: "password",
            label: "Confirm Password",
            type: "password",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justifyContent='flex-end' mt={3}>
      <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleNext })}</Box>
      </Grid>
    </Box>
  );
};

export default EmailAndPassword;
