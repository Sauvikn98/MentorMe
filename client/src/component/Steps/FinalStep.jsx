import React from "react";
import { Box} from "@mui/material";
import { renderText } from "../common/displayComponent";

const FinalStep = ({ data }) => {
  return (
    <Box style={{padding: "16px",}}>
      <Box mt={2} mb={2}>
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
