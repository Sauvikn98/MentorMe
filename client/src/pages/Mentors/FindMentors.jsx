import { Box, Grid, TextField } from "@mui/material";
import { useState } from "react";
import MentorProfileCard from "../../component/Cards/MentorProfileCard";

function FindMentors() {
    const [searchValue, setSearchValue] = useState("")
    const handleChange = (e)=> {
        setSearchValue(e.target.value)
    }
  return (
    <Box>
        <Box sx={{width: { xs: "100%", sm: "75%", md:"60%" }, margin: "0 auto 2rem"}}>

        <TextField
      label="Search for mentors.."
      type="text"
      variant='outlined'
      color='primary'
      size='medium'
      fullWidth={true}
      value={searchValue}
      onChange={handleChange}
      />
      </Box>
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

export default FindMentors;
