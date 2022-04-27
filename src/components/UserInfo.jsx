import {
  Typography,
  Button,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogActions,
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
    const response = await axios.post(
      `http://localhost:4000/user/delete/${user}`,
      user,
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
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/findUser/${user}`)
      .then((response) => {
        setFoundUser(response.data.result);
      });
  });
  return (
    <>
      {foundUser ? (
        <div>
          <Typography>{`This is ${user}'s page`}</Typography>
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
        </div>
      ) : (
        <div>
          <Typography>There's no such pokemon master</Typography>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            Go to main page
          </Button>
        </div>
      )}
    </>
  );
};

export default UserInfo;
