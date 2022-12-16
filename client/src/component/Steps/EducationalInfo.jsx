import { Box, Grid, Paper } from "@mui/material";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderText,
  renderStepper
} from "../common/displayComponent";

const EducationalInfo = ({ state, handleChange, handleNext, handlePrev }) => {
  return (
    <Box style={{paddingLeft: "40px", paddingTop:"60px", paddingBottom:"60px", paddingRight:"40px"}}>
      {renderStepper({state})}
      <Box mt={2} mb={2} pt={6} pb={6}>
        {renderText({
          label: "A Bit About Your Education",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderSelect({
            state,
            name: "qualificationDegree",
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
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
          {renderInputField({
            state,
            name: "collegeName",
            label: "College Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12} sm={6}>
          {renderInputField({
            state,
            name: "yearOfPassing",
            label: "Year of Passing",
            onChange: handleChange,
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
        {renderInputField({
            state,
            name: "branch",
            label: "Branch",
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

export default EducationalInfo;
