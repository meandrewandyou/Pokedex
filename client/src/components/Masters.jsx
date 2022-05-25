import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Masters = () => {
  const [fullList, setFullList] = useState();
  const useStyles = makeStyles({
    mstrDiv: {
      textAlign: "center",
      display: "block",
      marginTop: "1em",
    },
  });
  const classes = useStyles();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`user/findUser/fullList`)
      .then((response) => {
        setFullList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {fullList &&
        fullList.map((master, i) => (
          <div className={classes.mstrDiv} key={i}>
            <Button
              style={{ fontSize: "36px" }}
              onClick={() => {
                navigate(`/users/${master}`);
              }}
              color="warning"
              variant="text"
            >
              {master}
            </Button>
          </div>
        ))}
    </>
  );
};

export default Masters;
