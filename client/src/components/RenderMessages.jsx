import {
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import paper from "../img/paper.jpg";
import { Create, ThumbUp } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { setUser } from "../redux/slices/userSlice";

const RenderMessages = (props) => {
  const { arrayOfMessages, setArrayOfMessages, mssg, i } = props;
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [editedMessage, setEditedMessage] = useState(mssg.message);
  const navigate = useNavigate();
  const loggedUser = useSelector((state) => state.user.loggedUser);

  const dispatch = useDispatch();

  const deleteMessage = async () => {
    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };

    try {
      const response = await axios.post(
        `/user/${mssg.author}/deletePost`,
        { mssg, username: loggedUser.username },
        { headers: headers }
      );
      if (response.status === 200) {
        dispatch(
          setUser({ ...loggedUser, accessToken: response.data.newToken })
        );
        setOpen(!open);
        setArrayOfMessages(arrayOfMessages.filter((item) => item !== mssg));
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      window.alert(err.response.data);
    }
  };

  const editMessage = async () => {
    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };

    try {
      const response = await axios.post(
        `user/${mssg.author}/editPost`,
        { mssg, newMessageText: editedMessage, username: loggedUser.username },
        { headers: headers }
      );
      if (response.status === 200) {
        dispatch(
          setUser({ ...loggedUser, accessToken: response.data.newToken })
        );

        const newArray = arrayOfMessages.map((item) => {
          if (item === mssg) {
            return { ...item, message: editedMessage };
          } else {
            return item;
          }
        });
        setArrayOfMessages(newArray);
        setEdit(!edit);
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      window.alert(err.response.data);
    }
  };

  const handleLike = async () => {
    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };
    try {
      const response = await axios.post(
        `user/${mssg.author}/handleLikePost`,
        { mssg, whoLiked: loggedUser.username, username: loggedUser.username },
        { headers: headers }
      );
      if (response.data) {
        const newArray = arrayOfMessages.map((item) => {
          if (response.data.action === "like") {
            if (item === mssg) {
              dispatch(
                setUser({ ...loggedUser, accessToken: response.data.newToken })
              );
              return {
                ...item,
                likes: [...item.likes, loggedUser.username],
              };
            } else {
              return item;
            }
          } else {
            if (item === mssg) {
              dispatch(
                setUser({ ...loggedUser, accessToken: response.data.newToken })
              );

              return {
                ...item,
                likes: item.likes.filter(
                  (like) => like !== loggedUser.username
                ),
              };
            } else {
              return item;
            }
          }
        });
        setArrayOfMessages(newArray);
      } else {
        console.log("Smth went wrong");
      }
    } catch (err) {
      window.alert(err.response.data);
    }
  };

  return (
    <>
      <Card
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          padding: "1em",
          backgroundImage: `url(${paper})`,
        }}
        key={i}
      >
        <CardContent>
          <Typography
            variant="button"
            style={{
              display: "inline",
              fontSize: "16px",
            }}
          >
            Author:
          </Typography>
          <Button
            onClick={() => {
              navigate(`/users/${mssg.author}`);
            }}
            variant="text"
            color="warning"
            style={{ display: "inline", marginBottom: "5px" }}
          >
            <Typography> {mssg.author}</Typography>
          </Button>
          {edit ? (
            <Paper
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                maxWidth: "400px",
                marginTop: "20px",
              }}
            >
              <InputBase
                onChange={(e) => {
                  setEditedMessage(e.target.value);
                }}
                fullWidth
                autoFocus={true}
                value={editedMessage}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton
                onClick={() => {
                  setEditedMessage(mssg.message);
                  setEdit(!edit);
                }}
                color="inherit"
                sx={{ p: "10px", ":hover": { color: "red" } }}
              >
                <CloseIcon />
              </IconButton>
              <IconButton
                onClick={editMessage}
                type="submit"
                color="inherit"
                sx={{ p: "10px", ":hover": { color: "#00FFAB" } }}
              >
                <DoneIcon />
              </IconButton>
            </Paper>
          ) : (
            <Typography
              sx={{ mb: "10px" }}
            >{`Message: ${mssg.message}`}</Typography>
          )}

          <Tooltip title="Year-Month-Day">
            <Typography variant="caption">
              Posted at:
              {new Date(mssg.date).toISOString().slice(0, 10)}
            </Typography>
          </Tooltip>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => {
              handleLike();
            }}
            color="primary"
            disabled={!loggedUser}
          >
            <Badge
              invisible={mssg.likes.length === 0}
              badgeContent={mssg.likes.length}
            >
              <ThumbUp />
            </Badge>
          </IconButton>
          {loggedUser && mssg.author === loggedUser.username && (
            <Box sx={{ marginLeft: "auto" }}>
              <IconButton
                onClick={() => {
                  setEditedMessage(mssg.message);
                  setEdit(!edit);
                }}
                sx={{
                  ":hover": {
                    color: "blue",
                  },
                }}
              >
                <Create />
              </IconButton>
              <div style={{ display: "inline" }}>
                <IconButton
                  onClick={() => {
                    setOpen(!open);
                  }}
                  sx={{
                    ":hover": {
                      color: "red",
                    },
                  }}
                >
                  <DeleteForeverIcon></DeleteForeverIcon>
                </IconButton>
                <Dialog
                  open={open}
                  onClose={() => {
                    setOpen(!open);
                  }}
                >
                  <DialogContent>
                    <DialogContentText color="error">
                      Delete? Sure?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => {
                        deleteMessage();
                      }}
                    >
                      Yeah!
                    </Button>
                    <Button
                      onClick={() => {
                        setOpen(!open);
                      }}
                      autoFocus
                    >
                      No, missclicked.
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </Box>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default RenderMessages;
