import { Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setToken } from "../redux/slices/userSlice";
const UserInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = params;
  const username = useSelector((state) => state.user.loggedUser);
  const token = useSelector((state) => state.user.userAccessToken);
  const [foundUser, setFoundUser] = useState();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const deleteUser = () => {
    axios
      .post(`http://localhost:4000/user/delete/${user}`, user, {
        headers: headers,
      })
      .then((response) => {
        window.alert(response.data);
      })
      .then(() => {
        dispatch(setUser(null));
        dispatch(setToken(null));
      })
      .then(() => {
        navigate("/");
      });
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
          {user === username && (
            <Button onClick={deleteUser} color="error">
              Delete profile
            </Button>
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
