import React, {useState, useEffect}from "react";
import { Box, Grid, TextField } from "@mui/material";
import {
  renderButton,
  renderInputField,
  renderSelect,
  renderStepper,
  renderText,
} from "../common/displayComponent";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {  login } from "../../redux/authSlice";
import { getCurrentUser } from "../../redux/authService";

const Login = ({ state, handleNext, handlePrev }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {isLoggedIn, jwt_token} = useSelector((state) => state.auth);
  
  
  const handleLogin = ()=> {
    console.log(email, password);
    let userData = {
      email, 
      password
    }
    dispatch(login(userData))
    // dispatch(getCurrentUser(jwt_token.token))
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
      <Box pt={6} pb={6}>
        {renderText({
          label: "Login to your Account",
          type: "h6",
          color: "textPrimary",
          align: "center",
        })}
      </Box>

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

      <Grid container component={Box} justifyContent="flex-end" mt={3}>
        <Box ml={2}>{renderButton({ label: "Login", onClick: handleLogin })}</Box>
      </Grid>
    </Box>
  );
};

export default Login;
