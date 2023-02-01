import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import CreateProfile from "./pages/CreateProfile/CreateProfile";
import Mentors from "./pages/Mentors/Mentors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./component/common/PrivateRoute";
import Mentees from "./pages/Mentees/Mentees";
import UserProfile from "./pages/UserProfile/UserProfile";
import PostPage from "./pages/Posts/PostPage";
import Jobs from "./pages/Jobs/Jobs";

const theme = createTheme({
  typography: {
    fontFamily: "Nunito Sans",

    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#14a7fc",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            borderRadius: `20px`,
            backgroundImage: `var(--gradient-bg)`,
            boxShadow: "none",
            color: `var(--gray0)`,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderRadius: `20px`,
            boxShadow: "none",
          },
        },
      ],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route exact path="/create-profile" element={<CreateProfile />} />
          <Route
            exact
            path="/community"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/mentors"
            element={
              <PrivateRoute>
                <Mentors />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/mentees"
            element={
              <PrivateRoute>
                <Mentees />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/jobs"
            element={
              <PrivateRoute>
                <Jobs />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/profile/:userId"
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/posts/:postId"
            element={
              <PrivateRoute>
                <PostPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
