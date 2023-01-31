import React from "react";
import {
  Grid,
  Paper,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField
} from "@mui/material";

import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { requestForMentorship } from "../../redux/authSlice";
import { addPost} from "../../redux/postSlice";
import PostSomethingCard from "../../component/Feed/PostSomethingCard";

function UserProfile() {
  const dispatch = useDispatch();
  const { user, jwt_token } = useSelector((state) => state.auth);
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!title || !text) {
      return alert("Title and Body must not be empty!");
    }
    console.log({ title, text });
    const postData = {
      title,
      text,
      jwt_token,
      targetMentor: {
        id: userData._id,
        name: userData.name,
      },
    };
    dispatch(addPost(postData)).then((res) => {
        console.log(res)
      setText("");
      setTitle("");
    });
  };
  const handleSendRequest = () => {
    dispatch(requestForMentorship({ jwt_token, mentorId: userData._id }));
  };
  useEffect(() => {
    if (userId) {
      fetch(`http://127.0.0.1:5000/user/${userId}`, {
        headers: {
          "x-auth-token": jwt_token,
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setUserData(data);
        });
    } else {
      setError(true);
    }
  }, []);
  if (!user && !userData) {
    return <div>Loading..</div>;
  }
  return (
    <Layout>
      <Grid
        container
        style={{
          display: "flex",
          flexFlow: "row Wrap",
          justifyContent: "center",
          minHeight: "100vh",
          marginBottom: "3rem",
        }}
      >
        <Grid item xs={12} sm={8}>
          <Paper sx={{ marginTop: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "2rem",
              }}
            >
              <Avatar
                sx={{
                  height: "100px",
                  width: "100px",
                  bgcolor: "primary.main",
                  fontSize: 48,
                }}
              ></Avatar>
              <Typography variant="h6">{userData?.name}</Typography>
              {user?.account_type == "mentee" &&
              userData?.account_type == "mentor" &&
              user?.approvedMentors.filter(function (e) {
                return e.id == userData?._id;
              }).length > 0 ? (
                <Button variant="outlined">Connected</Button>
              ) : null}
              {user.account_type == "mentee" &&
              userData?.account_type == "mentor" &&
              user?.pendingMentors.filter(function (e) {
                return e.id == userData?._id;
              }).length > 0 ? (
                <Button variant="outlined">Requested</Button>
              ) : null}
              {user.account_type == "mentee" &&
              userData?.account_type == "mentor" &&
              user?.pendingMentors.filter(function (e) {
                return e.id == userData?._id;
              }).length == 0 &&
              user?.approvedMentors.filter(function (e) {
                return e.id == userData?._id;
              }).length == 0 ? (
                <Button onClick={handleSendRequest} variant="outlined">
                  Send Request
                </Button>
              ) : null}
            </Box>
          </Paper>
          {user?.account_type == "mentee" &&
          userData?.account_type == "mentor" &&
          user?.approvedMentors.filter(function (e) {
            return e.id == userData?._id;
          }).length > 0 ? (
            <Paper>
              <Card sx={{ maxWidth: "100%" }}>
                <CardContent>
                    <Typography>Ask Something...</Typography>
                  <TextField
                    id="outlined-basic"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    label="Post Title..."
                    variant="outlined"
                    sx={{ marginBottom: "16px" }}
                  />
                  <TextField
                    id="outlined-basic"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                    multiline
                    maxRows={5}
                    label="Post Body..."
                    variant="outlined"
                  />
                </CardContent>
                <CardActions disableSpacing>
                  <Button
                    onClick={handlePost}
                    variant="contained"
                    sx={{ marginLeft: "auto" }}
                  >
                    Ask
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          ) : null}
          <Paper sx={{ marginTop: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "2rem",
              }}
            >
              <Typography variant="h6" textAlign="flex-start">
                Education:
              </Typography>
              <List sx={{ width: "100%" }}>
                {userData?.education.map((ed) => {
                  return (
                    <Paper sx={{ marginBottom: "8px" }}>
                      <ListItem alignItems="flex-start" key={ed._id}>
                        <ListItemText
                          primary={
                            <Typography variant="body" color="text.primary">
                              {ed.collegeName}
                            </Typography>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.primary">
                                {ed.description}
                              </Typography>
                              <Typography variant="body2" color="text.primary">
                                {new Date(ed.startDate).toDateString()} -{" "}
                                {ed.current ? (
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    Currently studying here
                                  </Typography>
                                ) : (
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    {new Date(ed.endDate).toDateString()}
                                  </Typography>
                                )}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </Paper>
                  );
                })}
              </List>
            </Box>
          </Paper>
          <Paper sx={{ marginTop: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "2rem",
              }}
            >
              <Typography variant="h6" textAlign="flex-start">
                Experience:
              </Typography>
              <List sx={{ width: "100%" }}>
                {userData?.experience?.map((ex) => {
                  return (
                    <Paper sx={{ marginBottom: "8px" }}>
                      <ListItem alignItems="flex-start" key={ex._id}>
                        <ListItemText
                          primary={
                            <Typography variant="body" color="text.primary">
                              {ex.companyName}
                            </Typography>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography variant="body2" color="text.primary">
                                {ex.description}
                              </Typography>
                              <Typography variant="body2" color="text.primary">
                                {new Date(ex.startDate).toDateString()} -{" "}
                                {ex.current ? (
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    Currently working here
                                  </Typography>
                                ) : (
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                  >
                                    {new Date(ex.endDate).toDateString()}
                                  </Typography>
                                )}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    </Paper>
                  );
                })}
              </List>
            </Box>
          </Paper>

          {userData?.posts?.length ? (
            <Paper sx={{ marginTop: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "2rem",
                }}
              >
                <Typography variant="h6" textAlign="flex-start">
                  Recent Posts:
                </Typography>
                <List sx={{ width: "100%" }}>
                  {userData?.posts.map((post) => {
                    return (
                      <Paper
                        sx={{
                          padding: "8px",
                          cursor: "pointer",
                          marginBottom: "8px",
                        }}
                      >
                        <ListItem alignItems="flex-start" key={post._id}>
                          <ListItemText
                            primary={
                              <Typography variant="body" color="text.primary">
                                {post.title}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </Paper>
                    );
                  })}
                </List>
              </Box>
            </Paper>
          ) : null}

          {userData?.comments?.length ? (
            <Paper sx={{ marginTop: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "2rem",
                }}
              >
                <Typography variant="h6" textAlign="flex-start">
                  Recent Comments:
                </Typography>
                <List sx={{ width: "100%" }}>
                  {userData?.comments?.map((comment) => {
                    return (
                      <Paper
                        sx={{
                          padding: "8px",
                          cursor: "pointer",
                          marginBottom: "8px",
                        }}
                      >
                        <ListItem alignItems="flex-start" key={comment._id}>
                          <ListItemText
                            primary={
                              <Typography variant="body" color="text.primary">
                                {comment.title}
                              </Typography>
                            }
                          />
                        </ListItem>
                      </Paper>
                    );
                  })}
                </List>
              </Box>
            </Paper>
          ) : null}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default UserProfile;
