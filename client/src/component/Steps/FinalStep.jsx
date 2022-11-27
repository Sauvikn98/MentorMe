import React from "react";
import { Box} from "@mui/material";
import { renderText, renderStepper } from "../common/displayComponent";

const FinalStep = ({ data, state}) => {
  return (
    <Box style={{padding: "16px", paddingTop:"60px", paddingBottom:"60px"}}>
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

export default FinalStep;
