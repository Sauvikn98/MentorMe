import React from "react";
import { Box} from "@mui/material";
import { renderText, renderStepper } from "../common/displayComponent";

const SubmittedData = ({ data, state}) => {
  return (
    <Box style={{paddingLeft: "40px", paddingTop:"60px", paddingBottom:"60px", paddingRight:"40px"}}>
      {renderStepper({state})}
      <Box mt={2} mb={2} pt={6} >
        {renderText({
          label: "Your Submitted Data",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      {JSON.stringify(data, null, 4)}
    </Box>
  );
};

export default SubmittedData;
