import { React, useState } from "react";
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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../../redux/slices/userSlice";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  errorMessage: {
    color: "red",
  },
});

const Register = (props) => {
  const dispatch = useDispatch();
  const { closeOnSubmit } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [potentialUser, setPotentialUser] = useState({
    mail: "",
    username: "",
    password: "",
  });
  const classes = useStyles();
  const handleSetUser = (e) => {
    const { name, value } = e.target;
    setPotentialUser({ ...potentialUser, [name]: value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Card>
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const response = await axios
                .post("http://localhost:4000/user/register", potentialUser)
                .catch((err) => {
                  console.log(err);
                });
              if (response) {
                dispatch(setUser(potentialUser.username));
                dispatch(setToken(response.data));
                closeOnSubmit();
              } else {
                setErrMsg(true);
              }
            }}
          >
            <FormControl fullWidth>
              <TextField
                name="mail"
                onChange={handleSetUser}
                required
                type="email"
                label="E-mail"
                variant="standard"
                InputLabelProps={{ style: { color: "#E3BEC6" } }}
              />
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
                <Typography className={classes.errorMessage}>
                  Looks like user with username and/or email like this already
                  exists.
                </Typography>
              )}
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Register;
