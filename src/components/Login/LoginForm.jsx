import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Login from "./Login";
import Register from "./Register";
import { Typography } from "@mui/material";

const LoginForm = () => {
  const [open, setOpen] = useState(true);
  const [typeOfCard, setTypeOfCard] = useState();

  const loginButtonPushed = () => {
    setTypeOfCard("login");
  };

  const registerButtonPushed = () => {
    setTypeOfCard("register");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Button variant="outlined" color="success" onClick={handleClickOpen}>
        Register/Login
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <Typography
          color="success"
          variant="h2"
          align="center"
          id="customized-dialog-title"
          onClose={handleClose}
        >
          I wanna...
        </Typography>
        <DialogContent dividers>
          <Button
            onClick={loginButtonPushed}
            variant={typeOfCard === "login" ? "contained" : "outlined"}
          >
            Login
          </Button>
          <Button
            onClick={registerButtonPushed}
            variant={typeOfCard === "register" ? "contained" : "outlined"}
          >
            Register
          </Button>
          <Button color="error" onClick={handleClose} variant="outlined">
            Just show me pokemons already!
          </Button>
          {typeOfCard === "login" && <Login />}
          {typeOfCard === "register" && <Register />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
