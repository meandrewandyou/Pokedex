import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchInput from "./SearchInput";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { AccountCircle } from "@mui/icons-material";
const useStyles = makeStyles({
  siteHeader: {
    color: "#F94892",
    "&:hover": { cursor: "pointer" },
  },
  toolBar: {
    padding: "10px",
  },
  textField: {
    margin: "5px",
  },
});

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  // Let's track what page user currnetly on, to render SearchInput where it's necessary
  const location = useLocation();

  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="sticky" spacing={2}>
        <Toolbar
          style={{ backgroundColor: "#219F94" }}
          className={classes.toolBar}
        >
          <Typography
            onClick={() => {
              navigate("/");
            }}
            style={{ fontFamily: "Pokemon solid" }}
            className={classes.siteHeader}
            variant="h3"
          >
            PokeDex
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ color: user.loggedUser ? "#EBD8C3" : "#FFF6EA" }}
            >
              <AccountCircle style={{ fontSize: "60px" }} />
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
              onClose={handleCloseMenu}
            >
              <MenuItem
                sx={{
                  ":hover": {
                    bgcolor: "orange",
                    color: "white",
                  },
                }}
                onClick={() => {
                  navigate(`/masters`);
                  handleCloseMenu();
                }}
              >
                Masters
              </MenuItem>
              {user.loggedUser && (
                <MenuItem
                  sx={{
                    ":hover": {
                      bgcolor: "#4D96FF",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    navigate(`/users/${user.loggedUser.username}`);
                    handleCloseMenu();
                  }}
                >
                  My profile
                </MenuItem>
              )}
              {!user.loggedUser && <LoginForm closeMenu={handleCloseMenu} />}
              {user.loggedUser && (
                <MenuItem
                  sx={{
                    ":hover": {
                      bgcolor: "#FD5D5D",
                      color: "white",
                    },
                  }}
                  onClick={() => {
                    dispatch(setUser(null));
                    handleCloseMenu();
                  }}
                >
                  Log out
                </MenuItem>
              )}
            </Menu>
          </div>

          {/* Lets check the exact path and decide if we should render SearchInput.
          When single card is open, no need no SearchInput */}
          {location.pathname === "/" && <SearchInput />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
