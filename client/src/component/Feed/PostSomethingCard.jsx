import React from "react";
import { Button, TextField, Card, CardHeader, CardContent, CardActions, Avatar } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../redux/postSlice";


function PostSomethingCard({ user }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch()
  const {jwt_token} = useSelector((state) => state.auth);


  const handlePost = ()=> {
    if(!title || !text){
      return alert("Title and Body must not be empty!")
    }
    console.log({title, text})
    const postData = {
      title,
      text, 
      jwt_token
    }
    dispatch(addPost(postData)).then(()=> {
      setText("")
      setTitle("")
    })

  }
  return (
    <Card sx={{ maxWidth: "40vw", margin: "2rem auto", marginTop: 0 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe"></Avatar>
        }
        title="Post Something for you mentees..."
      />
      <CardContent>
        <TextField
          id="outlined-basic"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          label="Post Title..."
          variant="outlined"
          sx={{marginBottom: '16px'}}
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
        <Button onClick={handlePost} variant="contained" sx={{ marginLeft: "auto" }}>
          Post
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostSomethingCard;
