import { Box, Grid } from "@mui/material";
import React from "react";
import MentorProfileCard from "../../component/Cards/MentorProfileCard";

function MyMentors() {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <MentorProfileCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyMentors;
