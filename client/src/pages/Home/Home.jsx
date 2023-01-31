import { Typography, Box } from "@mui/material";
import React from "react";
import Feed from "../../component/Feed/Feed";
import NotificationCard from "../../component/Notification/NotificationCard";
import PostCard from "../../component/Posts/PostCard";
import ProfileCard from "../../component/Profile/ProfileCard";
import Layout from "../../layout/Layout";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/authSlice";
import { getPostsFromMentors, getPostsFromMentees} from "../../redux/postSlice";
import { useEffect } from "react";
import AskQuestionCard from "../../component/Feed/PostSomethingCard";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, user, jwt_token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser(jwt_token));
    if(user.account_type == "mentor"){
      dispatch(getPostsFromMentees(jwt_token))
    } else {
      dispatch(getPostsFromMentors(jwt_token))
    }
  }, []);
  if(!user){
    return <div>Loading...</div>
  }
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          justifyContent: "space-around",
          width: "80vw",
          margin: "2rem auto",
        }}
      >
        <div style={{ width: "30%", }}>
          <ProfileCard />
        </div>
        <div style={{ width: "70%" }}>
          <Feed />
        </div>
      </Box>
    </Layout>
  );
}

export default Home;
