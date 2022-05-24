import React, { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
const useStyles = makeStyles({
  loginButton: {
    marginTop: "100px",
  },
  errMessage: {
    color: "red",
  },
});

const Login = (props) => {
  const { closeOnSubmit } = props;
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  // We'll use this state to show err message if we don't get response data from server
  // while logging in
  const [errMsg, setErrMsg] = useState(false);
  const handleSetUser = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const classes = useStyles();
  return (
    <>
      <Card>
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await axios
                .post("http://localhost:4000/user/login", userInput)
                .catch((err) => {
                  console.log(err);
                });
              if (response) {
                dispatch(
                  setUser(response.data, () => {
                    closeOnSubmit();
                  })
                );
              } else {
                setErrMsg(true);
              }
            }}
          >
            <FormControl fullWidth>
              <TextField
                name="username"
                onChange={handleSetUser}
                required
                label="Username"
                variant="standard"
                InputLabelProps={{ style: { color: "#E3BEC6" } }}
              />
              <TextField
                name="password"
                onChange={handleSetUser}
                required
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="standard"
                InputLabelProps={{ style: { color: "#E3BEC6" } }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {errMsg && (
                <Typography className={classes.errMessage}>
                  Username or password is incorrect! Try again.
                </Typography>
              )}
              <Button className={classes.loginButton} type="submit">
                Login
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
