import React from "react";
import { Box, Grid} from "@mui/material";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderStepper,
  renderText,
} from "../common/displayComponent";

const PersonalInfo = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Box style={{paddingLeft: "40px", paddingTop:"60px", paddingBottom:"60px", paddingRight:"40px"}}>
       {renderStepper({state})}
      <Box pt={6} pb={6}>
        {renderText({
          label: "Personal Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
       
      </Box>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "nickName",
            label: "Nick Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "familyName",
            label: "Family Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderSelect({
            state,
            name: "gender",
            label: "Gender",
            options: [
              { key: "Male", value: "male" },
              { key: "Female", value: "female" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderInputField({
            state,
            name: "phone",
            label: "Phone",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderInputField({
            state,
            name: "address",
            label: "Address",
            type: "address",
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

export default PersonalInfo;
