import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
  renderStepper
} from "../common/displayComponent";

const Step2 = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Box style={{padding: "16px"}}>
      {renderStepper({state})}
      <Box mt={2} mb={2}>
        {renderText({
          label: "A Bit About Education",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "highestDegree",
            label: "Qualification Degree",
            options: [
              { key: "graduation", value: "Graduation" },
              { key: "B.Tech", value: "B.Tech" },
              { key: "BCA", value: "BCA Course" },
              { key: "M.Tech", value: "M.Tech" },
              { key: "MCA", value: "MCA" },
            ],
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "issuedBy",
            label: "Issued By College name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "yearOfPassing",
            label: "Passing Year",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderSelect({
            state,
            name: "jobApplyFor",
            label: "JobApplyFor",
            options: [
              { key: "Manager", value: "Manager" },
              { key: "Project Designer", value: "Project Designer" },
              { key: "Clerk", value: "Clerk" },
              { key: "Helper", value: "Helper" },
            ],
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container component={Box} justifyContent='flex-end' mt={2} p={2}>
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

export default Step2;
