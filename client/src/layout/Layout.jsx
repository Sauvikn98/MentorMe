import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/PeopleOutlineOutlined";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeIcon from "@mui/icons-material/HomeOutlined";
import WorkIcon from "@mui/icons-material/WorkOutlineOutlined";
import { useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signOutUser} from '../redux/authSlice'


function Layout(props) {
  const { children } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {isLoggedIn,user, jwt_token} = useSelector((state) => state.auth);

  let navItems;
  if(user.account_type == "mentor"){
    navItems = [
      {
        text: "Community",
        icon: <HomeIcon />,
        path: "/community",
      },
      {
        text: "Mentees",
        icon: <PeopleIcon />,
        path: "/mentees",
      },
      {
        text: "Profile",
        icon: <AccountCircle />,
        path: "/profile",
      },
    ];
  } else {
    navItems = [
      {
        text: "Community",
        icon: <HomeIcon />,
        path: "/community",
      },
      {
        text: "Mentors",
        icon: <PeopleIcon />,
        path: "/mentors",
      },
      {
        text: "Jobs",
        icon: <WorkIcon />,
        path: "/jobs",
      },
      {
        text: "Profile",
        icon: <AccountCircle />,
        path: "/profile",
      },
    ];
  }

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = ()=> {
    dispatch(signOutUser())
    window.location.href= '/'
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          borderBottom: 0,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MentorMe.io
            </Typography>
            <Box sx={{}}>
              {navItems.map((item) => (
                <Button
                  onClick={() => navigate(item.path)}
                  key={item.text}
                  sx={
                    location.pathname == item.path
                      ? {
                        borderBottom: `5px solid #14a7fc`,
                        color: `var(--text-color)`,
                        margin: "0 1rem",
                        padding:'0.5rem'
                        }
                      : {
                        color: `var(--text-color)`,
                        margin: "0 1rem",
                        padding:'0.5rem'
                      }
                  }
                  startIcon={item.icon}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <LogoutRoundedIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      {/* main content */}
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          flexGrow: 1,
          backgroundColor: `var(--light-bg)`,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
