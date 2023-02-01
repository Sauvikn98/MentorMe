import React, {useState}from "react";
import { Box, Grid, TextField } from "@mui/material";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderStepper,
  renderText,
} from "../common/displayComponent";
import { useDispatch, useSelector } from "react-redux";
import { createMentor, createMentee } from "../../redux/authSlice";

const EmailAndPassword = ({ state, handleNext, handlePrev }) => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state.auth);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  
  
  const handleSignUp = ()=> {
    console.log(name, email, password);
    let userData = {
      name,
      email, 
      password,
      bio
    }
    if(!email || !password || !name || !bio){
      return alert("All fields are required!")
    }
    if(state.account_type == "mentor"){
      dispatch(createMentor(userData)).then(
        res=> {
          if(res.payload.token) {
            handleNext()
          } else {
            alert(res.payload.error)
          }
        }
        ).catch(err=> console.log(err))
    } else if (state.account_type == "mentee"){
      dispatch(createMentee(userData)).then(res=> handleNext()).catch(err=> console.log(err))
    }
  }




  return (
    <Box
      style={{
        paddingLeft: "40px",
        paddingTop: "60px",
        paddingBottom: "60px",
        paddingRight: "40px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renderStepper({ state })}
      <Box pt={6} pb={6}>
        {renderText({
          label: "Create Login Credentials",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
        <TextField
          label="Your Name"
          type="text"
          variant='outlined'
          color='primary'
          size='small'
          fullWidth={true}
          name="name"
          value={name}
          onChange={(e)=> setName(e.target.value)}
        />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
        <TextField
          label="Your Email"
          type="email"
          variant='outlined'
          color='primary'
          size='small'
          fullWidth={true}
          name="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
        <TextField
          label="Password"
          type="password"
          variant='outlined'
          color='primary'
          size='small'
          fullWidth={true}
          name="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginBottom: "16px" }}>
        <Grid item xs={12}>
        <TextField
          label="Your Bio"
          type="text"
          variant='outlined'
          color='primary'
          size='small'
          fullWidth={true}
          name="bio"
          value={bio}
          onChange={(e)=> setBio(e.target.value)}
        />
        </Grid>
      </Grid>

      <Grid container component={Box} justifyContent="flex-end" mt={3}>
        <Box ml={2}>
          {renderButton({
            label: "Back",
            color: "default",
            onClick: handlePrev,
          })}
        </Box>
        <Box ml={2}>{renderButton({ label: "Next", onClick: handleSignUp })}</Box>
      </Grid>
    </Box>
  );
};

export default EmailAndPassword;
