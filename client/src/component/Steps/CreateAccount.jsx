import { styled } from "@mui/material/styles";
import { Grid, Divider, Typography, Box, Button } from "@mui/material";
import { renderButton, renderText } from "../common/displayComponent";
import { useState } from "react";
import Login from "./Login";

export default function CreateAccount({ handleNext, handleAccountType }) {
  const [login, setLogin] = useState(false);

  const content1 = (
    <Button
      variant="outlined-basic"
      style={{ backgroundColor: `var(--primary)`, color: `var(--card-bg)` }}
      size="large"
      onClick={() => {
        handleAccountType("mentor");
        handleNext();
      }}
    >
      Create Account as Mentor
    </Button>
  );

  const content2 = (
    <Button
      variant="outlined-basic"
      style={{ backgroundColor: `var(--primary)`, color: `var(--card-bg)` }}
      size="large"
      onClick={() => {
        handleAccountType("mentee");
        handleNext();
      }}
    >
      Create Account as Mentee
    </Button>
  );

  return (
    <Grid>
      <Box pt={6}>
        {renderText({
          label: "REGISTRATION FORM",
          type: "h5",
          color: "textPrimary",
          align: "center",
        })}
      </Box>
      {login ? (
          <Login />
        ) : (
      <Grid
        item
        container
        style={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       
          <>
            <Grid item xs={5}>
              <Typography variant="body2" align="center">
                {content1}
              </Typography>
            </Grid>

            <Divider orientation="vertical" style={{ height: "60%" }}>
              OR
            </Divider>
            <Grid item xs={5}>
              <Typography variant="body2" align="center">
                {content2}
              </Typography>
            </Grid>
          </>
      </Grid>
        )}
      <Box pb={6}>
        {login ? (
          <Typography align="center">
            New User?{" "}
            <Typography
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setLogin(false)}
            >
              {" "}
              Create Account.
            </Typography>
          </Typography>
        ) : (
          <Typography align="center">
            Already have an account?{" "}
            <Typography
              sx={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setLogin(true)}
            >
              {" "}
              Login instead.
            </Typography>
          </Typography>
        )}
      </Box>
    </Grid>
  );
}
