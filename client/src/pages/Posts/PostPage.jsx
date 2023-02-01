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
  TextField,
  Divider,
} from "@mui/material";

import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addPost } from "../../redux/postSlice";
import Loading from "../../component/common/Loading";

function PostPage() {
  const dispatch = useDispatch();
  const { user, jwt_token } = useSelector((state) => state.auth);
  const { postId } = useParams();
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const handlePost = () => {
    if (!text) {
      return alert("Comment must not be empty!");
    }
    console.log({ text });
    const commentData = {
      text,
      jwt_token,
      postId,
    };
    fetch(`http://127.0.0.1:5000/posts/addComment/${postId}`, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": jwt_token,
      },
      body: JSON.stringify(commentData),
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setPostData(data);
        setText("");
      });
  };

  useEffect(() => {
    if (postId) {
      fetch(`http://127.0.0.1:5000/posts/${postId}`, {
        headers: {
          "x-auth-token": jwt_token,
        },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log({ data });
          setPostData(data);
        });
    } else {
      setError(true);
    }
  }, []);
  if (!user || !postData) {
    return <Loading />;
  }
  if(postData.error){
    return <Layout>
        <div>No Post found</div>
    </Layout>
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
          <Paper sx={{ margin: "2rem auto" }}>
            <Card sx={{ width: "100%" }}>
              <CardHeader
                avatar={<Avatar sx={{ bgcolor: "primary.main" }}></Avatar>}
                title={postData.author.authorName}
                subheader={`Posted on: ${new Date(
                  postData.createdAt
                ).toDateString()}`}
              />

              <CardContent>
                <Typography variant="h5" sx={{ marginBottom: "0.5rem" }}>
                  {postData.title}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
                  {postData.text}
                </Typography>
                <Divider />
                <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                  {postData.comments.length} comments
                </Typography>
                {postData?.comments.map((comment) => {
                  return (
                    <Card sx={{ width: "100%", marginTop:'1rem' }} key={comment._id}>
                      <CardHeader
                        avatar={
                          <Avatar sx={{ bgcolor: "primary.main" }}></Avatar>
                        }
                        title={comment.authorName}
                        subheader={`Posted on: ${new Date(
                          comment.postedOn
                        ).toDateString()}`}
                      />

                      <CardContent>
                        <Typography>{comment.text}</Typography>
                      </CardContent>
                    </Card>
                  );
                })}
              </CardContent>
            </Card>
          </Paper>
          <Paper>
            <Card sx={{ maxWidth: "100%" }}>
              <CardContent>
                <TextField
                  id="outlined-basic"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  fullWidth
                  label="Post a Comment..."
                  variant="outlined"
                  sx={{ marginBottom: "16px" }}
                />
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  onClick={handlePost}
                  variant="contained"
                  sx={{ marginLeft: "auto" }}
                >
                  Post
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default PostPage;
