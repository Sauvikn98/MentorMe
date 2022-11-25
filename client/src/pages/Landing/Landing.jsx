import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  MenuItem,
  Grid,
  Button,
} from "@mui/material/";
import { useNavigate } from "react-router-dom";
import landingImage from "../../assets/landing-image.png";
export default function Landing() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/create-profile");
  };
  return (
    <Box
      className="landing"
      sx={{ flexGrow: 1, minHeight: "100vh", width: "100vw" }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ width: "80%", margin: "0 auto" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 600 }}
          >
            MentorMe.io
          </Typography>

          <MenuItem
            onClick={handleNavigate}
            sx={{ borderRadius: "50px", border: `1px solid var(--primary)` }}
          >
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ fontWeight: 600, color: `var(--primary)` }}
            >
              Login
            </Typography>
          </MenuItem>
          <MenuItem
            onClick={handleNavigate}
            sx={{
              borderRadius: "50px",
              backgroundImage: `var(--gradient-bg)`,
              marginLeft: "1rem",
            }}
          >
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ fontWeight: 600, color: `var(--gray0)` }}
            >
              Signup
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 800 }}>
              Welcome to the <br /> New age of
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: `var(--primary-dark)`,
                textDecoration: "underline",
                textDecorationColor: `var(--primary-light)`,
              }}
            >
              Mentorship
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 3,
                fontWeight: "bold",
                padding: "20px 25px",
                borderRadius: "50px",
              }}
              onClick={handleNavigate}
            >
              Get started for free!
            </Button>
          </Grid>
          <img
            item
            src={landingImage}
            alt="landing image"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Grid>
      </Box>
    </Box>
  );
}
