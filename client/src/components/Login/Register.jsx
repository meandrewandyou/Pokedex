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
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
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
    from: "",
    personType: "cat person",
    gender: "boy",
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
                .post("user/register", potentialUser)
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
                placeholder="Just fake it, as usual)"
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
              <TextField
                name="from"
                onChange={handleSetUser}
                type="text"
                label="Country, hometown"
                variant="standard"
                InputLabelProps={{ style: { color: "#E3BEC6" } }}
              />
              {errMsg && (
                <Typography className={classes.errorMessage}>
                  Looks like user with username and/or email like this already
                  exists.
                </Typography>
              )}
              <FormControl>
                <FormLabel>I'm a:</FormLabel>
                <RadioGroup
                  onChange={handleSetUser}
                  name="gender"
                  defaultValue="boy"
                  row
                >
                  <FormControlLabel
                    value="boy"
                    control={<Radio />}
                    label="Boy"
                  />
                  <FormControlLabel
                    value="girl"
                    control={<Radio />}
                    label="Girl"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel>I'm a:</FormLabel>
                <RadioGroup
                  onChange={handleSetUser}
                  defaultValue="cat person"
                  name="personType"
                  row
                >
                  <FormControlLabel
                    value="cat person"
                    control={<Radio />}
                    label="Cat person"
                  />
                  <FormControlLabel
                    value="dog person"
                    control={<Radio />}
                    label="Dog person"
                  />
                </RadioGroup>
              </FormControl>
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Register;
