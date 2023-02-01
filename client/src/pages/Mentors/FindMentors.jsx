import { Box, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import MentorProfileCard from "../../component/Cards/MentorProfileCard";
import {useSelector} from 'react-redux'
import Loading from "../../component/common/Loading";

function FindMentors() {
    const [searchValue, setSearchValue] = useState("")
    const [mentors, setMentors] = useState("")

  const { user, jwt_token } = useSelector((state) => state.auth);
    const handleChange = (e)=> {
        setSearchValue(e.target.value)
    }
    useEffect(() => {
      
        fetch(`http://127.0.0.1:5000/user/mentors/get`, {
          headers: {
            "x-auth-token": jwt_token,
          },
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log({ data });
            setMentors(data);
          });
    }, []);
    if (!user || !mentors) {
      return <Loading/>
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
        {mentors?.map((mentor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={mentor._id}>
            <MentorProfileCard mentor={mentor}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FindMentors;
