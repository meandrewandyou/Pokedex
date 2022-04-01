import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchInput from "./SearchInput";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../Login/LoginForm";
import { Button, Link } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/slices/userSlice";
const useStyles = makeStyles((theme) => ({
  siteHeader: {
    fontFamily: "Pokemon solid",
    color: "#F94892",
  },
  toolBar: {
    padding: "10px",
  },
  textField: {
    margin: "5px",
  },
  loginFormStyle: {
    display: "flex",
    marginBottom: "-30px",
    position: "relative",
    marginLeft: "auto",
    marginRight: "20px",
  },
}));

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  // Let's track what page user currnetly on, to render SearchInput where it's necessary
  const location = useLocation();

  return (
    <>
      <AppBar position="sticky" spacing={2}>
        <Toolbar
          style={{ backgroundColor: "#219F94" }}
          className={classes.toolBar}
        >
          <Typography className={classes.siteHeader} variant="h3">
            PokeDex
          </Typography>
          {user.loggedUser && (
            <Link
              onClick={() => {
                navigate(`/users/${user.loggedUser}`);
              }}
              underline="hover"
            >{`Hello there ${user.loggedUser}!`}</Link>
          )}
          <div className={classes.loginFormStyle}>
            {!user.loggedUser && <LoginForm />}
          </div>
          <div className={classes.loginFormStyle}>
            {user.loggedUser && (
              <Button
                onClick={() => {
                  dispatch(setUser(null));
                  dispatch(setToken(null));
                }}
                color="warning"
                variant="outlined"
              >
                Log out
              </Button>
            )}
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
