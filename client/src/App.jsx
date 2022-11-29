import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import CreateProfile from "./pages/CreateProfile/CreateProfile";

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
          <Route exact path="/community" element={<Home />} />
          <Route exact path="/create-profile" element={<CreateProfile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
