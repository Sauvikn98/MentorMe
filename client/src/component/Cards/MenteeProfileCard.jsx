import React from "react";
import {
  Card,
  CardMedia,
  Avatar,
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { approveMentorship } from "../../redux/authSlice";

function MenteeProfileCard({ mentee, pending=false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [menteeData, setMenteeData] = useState(null);
  const { jwt_token } = useSelector((state) => state.auth);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/user/${mentee.id}`, {
      headers: {
        "x-auth-token": jwt_token,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setMenteeData(data);
      });
  }, []);
  const handleApprove = ()=> {
    const userData = {
        menteeId: menteeData._id, 
        jwt_token
    }
    dispatch(approveMentorship(userData))
  }
  if (!menteeData) {
    return <div>Loading...</div>;
  }
  const handleNavigate = () => {
    navigate(`/profile/${menteeData._id}`);
  };
  return (
    <Card sx={{ }} >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          cursor: "pointer" 
        }}
        onClick={handleNavigate}
      >
        <Avatar
          sx={{
            height: "100px",
            width: "100px",
            bgcolor: "primary.main",
            fontSize: 48,
          }}
        >
          
        </Avatar>
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" onClick={handleNavigate} sx={{cursor:'pointer'}}>{menteeData?.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          {menteeData?.bio}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Mentors: {menteeData?.approvedMentors?.length}
        </Typography>
        {
            pending ? (
                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                    <Button variant="outlined" size="small" sx={{marginRight:'8px'}} onClick={handleApprove}>Approve</Button>
                    <Button variant="outlined" size="small">Reject</Button>
                </Box>
            ) : null
        }
        {/*  */}
      </CardContent>
    </Card>
  );
}

export default MenteeProfileCard;
