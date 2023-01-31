import { Box, Grid } from "@mui/material";
import React from "react";
import MentorProfileCard from "../../component/Cards/MentorProfileCard";
import { useDispatch, useSelector } from "react-redux";


function MyMentors() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {user.approvedMentors.map((mentor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={mentor.id}>
            <MentorProfileCard mentor={mentor}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyMentors;
