import React, { useEffect, useState } from "react";
import {
  IconButton,
  CircularProgress,
  Divider,
  Paper,
  InputBase,
  Grid,
} from "@mui/material";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Create } from "@mui/icons-material";
import RenderMessages from "./RenderMessages";
import { setUser } from "../redux/slices/userSlice";

const MessageBoard = () => {
  const [message, setMessage] = useState("");
  const [arrayOfMessages, setArrayOfMessages] = useState();
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const dispatch = useDispatch();

  const BASEURL =
    "http://localhost:4000" || "https://pokedex-for-everybody.herokuapp.com";

  const submitMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      message,
      date: Date.now(),
      author: loggedUser.username,
      likes: [],
    };
    axios
      .post(
        `http://localhost:4000/user/${loggedUser.username}/addMessage`,
        { newMessage, username: loggedUser.username },
        {
          headers: {
            Authorization: `Bearer ${loggedUser.accessToken}`,
          },
        }
      )
      .then((response) => {
        dispatch(
          setUser({ ...loggedUser, accessToken: response.data.newToken })
        );
        response.status === 200 &&
          setArrayOfMessages([newMessage, ...arrayOfMessages]);
        setMessage("");
      })
      .catch((err) => {
        window.alert(err.response.data);
      });
  };

  const getMessages = async () => {
    const response = await axios.get(`${BASEURL}/user/getMessages`);
    setArrayOfMessages(response.data);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Paper
            sx={{
              backgroundColor: "#E5CB9F",
              padding: "20px",
              margin: "3% auto",
            }}
          >
            {loggedUser && (
              <form onSubmit={submitMessage}>
                <Paper
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                    marginTop: "20px",
                  }}
                >
                  <InputBase
                    required
                    fullWidth
                    value={message}
                    name="username"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="Leave a message"
                    variant="filled"
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    type="submit"
                    color="inherit"
                    sx={{ p: "10px" }}
                    aria-label="directions"
                  >
                    <Create />
                  </IconButton>
                </Paper>
              </form>
            )}

            {arrayOfMessages ? (
              arrayOfMessages.map((mssg, i) => (
                <RenderMessages
                  key={i}
                  mssg={mssg}
                  i={i}
                  arrayOfMessages={arrayOfMessages}
                  setArrayOfMessages={setArrayOfMessages}
                />
              ))
            ) : (
              <CircularProgress />
            )}
          </Paper>
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
};

export default MessageBoard;
