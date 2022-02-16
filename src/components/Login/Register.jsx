import { React, useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const handleSetUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Card>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(user);
              axios
                .post("http://localhost:4000/user/register", user)
                .then((response) => {
                  console.log(response.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            <FormControl fullWidth>
              <TextField
                name="email"
                onChange={handleSetUser}
                required
                type="email"
                label="E-mail"
                variant="standard"
                InputLabelProps={{ style: { color: "#E3BEC6" } }}
              />
              <TextField
                name="userName"
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
              <Button type="submit">Submit</Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Register;
