import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
  renderStepper
} from "../common/displayComponent";

const ProfessionalInfo = ({
  state,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <Box style={{paddingLeft: "40px", paddingTop:"60px", paddingBottom:"60px", paddingRight:"40px"}}>
      {renderStepper({state})}
      <Box mt={2} mb={2} pt={6} pb={6}>
        {renderText({
          label: "Professional Details",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "skill",
            label: "Skills You have",
            options: [
              { key: "Programming", value: "Programming" },
              { key: "Communication", value: "Communication" },
              { key: "Designing", value: "Designing" },
              { key: "not Yet Defined", value: "not Yet Defined" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "workExperence",
            label: "Experence You have",
            options: [
              { key: "Less than 1 year", value: "Less than 1 year" },
              { key: "More than 1 year", value: "More than 1 year" },
              { key: "1 year", value: "1 year" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
        {renderSelect({
            state,
            name: "currentJob",
            label: "Current Job",
            options: [
              { key: "Manager", value: "Manager" },
              { key: "Project Designer", value: "Project Designer" },
              { key: "Software Engineer", value: "Software Engineer" },
              { key: "Graphic Designer", value: "Graphic Designer" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "jobLocation",
            label: " Job Location ",
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
        <Box ml={2}>
          {renderButton({ label: "Finish", onClick: handleNext })}
        </Box>
      </Grid>
    </Box>
  );
};

export default ProfessionalInfo;
