import { ArrowCircleUp } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PeopleIcon from "@mui/icons-material/People";
import { Button, ButtonGroup, Card, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavButtons = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card elevation={20}>
        <ButtonGroup
          orientation="vertical"
          sx={{
            width: "30px",
            position: "fixed",
            right: "20px",
            top: "50%",
          }}
        >
          <Tooltip placement="left" title="Up">
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              variant="contained"
              sx={{
                backgroundColor: "rgba(255, 205, 56, 0.2)",
                color: "green",
                padding: "0",
                borderRadius: "50% 50% 0 0",
                ":hover": {
                  bgcolor: "pink",
                  color: "black",
                },
              }}
            >
              <ArrowCircleUp sx={{ margin: "0" }} fontSize="large" />
            </Button>
          </Tooltip>
          <Tooltip placement="left" title="Home">
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{
                backgroundColor: "rgba(255, 205, 56, 0.2)",
                color: "green",

                ":hover": {
                  bgcolor: "pink",
                  color: "black",
                },
              }}
              variant="contained"
              children={<HomeIcon fontSize="large" />}
            ></Button>
          </Tooltip>
          <Tooltip placement="left" title="Message board">
            <Button
              onClick={() => {
                navigate(`/messageBoard`);
              }}
              sx={{
                backgroundColor: "rgba(255, 205, 56, 0.2)",
                color: "green",

                ":hover": {
                  bgcolor: "pink",
                  color: "black",
                },
              }}
              variant="contained"
            >
              <MessageIcon fontSize="large" />
            </Button>
          </Tooltip>
          <Tooltip placement="left" title="Masters">
            <Button
              onClick={() => {
                navigate(`/masters`);
              }}
              variant="contained"
              sx={{
                backgroundColor: "rgba(255, 205, 56, 0.2)",
                color: "green",

                padding: "0",
                borderRadius: "0 0 50% 50%",
                ":hover": {
                  bgcolor: "pink",
                  color: "black",
                },
              }}
            >
              <PeopleIcon fontSize="large" />
            </Button>
          </Tooltip>
        </ButtonGroup>
      </Card>
    </>
  );
};

export default NavButtons;
