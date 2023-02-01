import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import MenteeProfileCard from "../../component/Cards/MenteeProfileCard";
import { useDispatch, useSelector } from "react-redux";


function MyMentees() {
  const { user } = useSelector((state) => state.auth);
 if(!user){
    return <div>Loading...</div>
 }
 if(!user.approvedMentees?.length){
    return (
        <Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        <Typography sx={{margin:'3rem'}}>No Approved Mentees</Typography>
      </Grid>
    </Box>
    )
 }
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {user?.approvedMentees?.map((mentee) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={mentee.id}>
            <MenteeProfileCard mentee={mentee}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MyMentees;
