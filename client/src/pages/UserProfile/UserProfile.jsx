import React from "react";
import {
  Card,
  Grid,
  Paper,
  Box,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Layout from "../../layout/Layout";

function UserProfile() {
  return (
    <Layout>
      <Grid
        container
        style={{
          display: "flex",
          flexFlow: "row Wrap",
          justifyContent: "center",
          height: "100vh",
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
              <Typography variant="h6">Dhanmoni Nath</Typography>
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
                Education:
              </Typography>
              <List sx={{ width: "100%" }}>
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Assam Engineering College"
                    secondary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.primary">
                          Studied Computer science
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          Start Date:
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          End Date:
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
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
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary="Google"
                    secondary={
                      <React.Fragment>
                        <Typography variant="body2" color="text.primary">
                          Software Engineer
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          Start Date:
                        </Typography>
                        <Typography variant="body2" color="text.primary">
                          End Date:
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default UserProfile;
