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

function MenteeProfileCard({ mentee }) {
  const navigate = useNavigate();
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
  if (!menteeData) {
    return <div>Loading...</div>;
  }
  const handleNavigate = () => {
    navigate(`/profile/${menteeData._id}`);
  };
  return (
    <Card sx={{ cursor: "pointer" }} onClick={handleNavigate}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
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
        <Typography variant="h5">{menteeData?.name}</Typography>
        <Typography variant="body1" color="text.secondary">
          Software Developer at Google
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Mentors: {menteeData?.approvedMentors?.length}
        </Typography>
        {/* <Button>Send Request</Button> */}
      </CardContent>
    </Card>
  );
}

export default MenteeProfileCard;
