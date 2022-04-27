import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Login from "./Login";
import Register from "./Register";
import { Typography, MenuItem } from "@mui/material";

const LoginForm = (props) => {
  const { closeMenu } = props;
  const [open, setOpen] = useState(false);
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
    console.log("handleClose activated");
  };

  return (
    <div style={{ width: "100%" }}>
      <MenuItem
        sx={{
          ":hover": {
            bgcolor: "#4D96FF",
            color: "white",
          },
        }}
        onClick={() => {
          handleClickOpen();
          closeMenu();
        }}
      >
        Register/Login
      </MenuItem>

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
        <DialogContent>
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
          {typeOfCard === "login" && <Login closeOnSubmit={handleClose} />}
          {typeOfCard === "register" && (
            <Register closeOnSubmit={handleClose} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginForm;
