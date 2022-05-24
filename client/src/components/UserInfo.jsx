import {
  Typography,
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogActions,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  ButtonGroup,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";

const UserInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = params;
  const loggedUser = useSelector((state) => state.user.loggedUser);
  const [foundUser, setFoundUser] = useState();
  const [open, setOpen] = useState(false);

  const deleteUser = async () => {
    const headers = {
      Authorization: `Bearer ${loggedUser.accessToken}`,
    };
    try {
      const response = await axios.post(
        `http://localhost:4000/user/delete/${loggedUser.username}`,
        { username: loggedUser.username },
        {
          headers: headers,
        }
      );

      if (response) {
        dispatch(setUser(null));
        window.alert(response.data);
        navigate("/");
      } else {
        window.alert("Something went wrong");
      }
    } catch (err) {
      window.alert(err.response.data);
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/findUser/${user}`)
      .then((response) => {
        setFoundUser(response.data);
      });
  });
  return (
    <>
      <Grid container>
        <Grid xs={1} sm={2} item md={3} lg={4}></Grid>
        <Grid item xs={10} sm={8} md={6} lg={4}>
          {foundUser === "No user" ? (
            <div>
              {" "}
              <Typography>There's no such pokemon master</Typography>
              <Button
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Button>
            </div>
          ) : foundUser ? (
            <Card
              raised
              sx={{
                maxWidth: "100%",
                margin: "40px",
                backgroundColor: "#E5CB9F",
              }}
            >
              <CardHeader
                align="center"
                title={
                  <Typography
                    sx={{
                      fontFamily: "Pokemon solid",
                      fontSize: "32px",
                      color: "#F94892",
                      letterSpacing: "2px",
                      textShadow: "-1px -1px #000, 0 3px 0 #444",
                    }}
                  >
                    {user}
                  </Typography>
                }
              ></CardHeader>
              <CardContent>
                <Typography>{`I'm a ${foundUser.gender}`}</Typography>
                <Typography>{`I'm from: ${
                  foundUser.from === "" ? "TOP SECRET" : foundUser.from
                }`}</Typography>
                <Typography>{`I'm a ${foundUser.personType}`}</Typography>
              </CardContent>
              <CardActions>
                <ButtonGroup fullWidth orientation="vertical">
                  <Button
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Go to main page
                  </Button>
                  <Button
                    onClick={() => {
                      navigate(`/users/${user}/favorites`);
                    }}
                    color="warning"
                  >
                    Favorite pokemons
                  </Button>
                  {loggedUser && user === loggedUser.username && (
                    <div>
                      <Button
                        onClick={() => {
                          setOpen(!open);
                        }}
                        color="error"
                      >
                        Delete profile
                      </Button>
                      <Dialog
                        open={open}
                        onClose={() => {
                          setOpen(!open);
                        }}
                      >
                        <DialogContent>
                          <DialogContentText>
                            Are you sure you want to delete your profile?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={deleteUser}>Yeah!</Button>
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
                  )}
                </ButtonGroup>
              </CardActions>
            </Card>
          ) : (
            <div>
              <CircularProgress />
            </div>
          )}
        </Grid>
        <Grid xs={1} sm={2} md={3} item lg={4}></Grid>
      </Grid>
    </>
  );
};

export default UserInfo;
