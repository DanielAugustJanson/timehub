import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export const Loginbox = () => {
  const [UsernameInput, SetUsername] = useState("");
  const [PasswordInput, SetPassword] = useState("");

  const CheckLoginData = async () => {
    await axios
      .post("http://localhost:8080/loginHashed", {
        username: UsernameInput,
        password: PasswordInput,
      })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("tokenData", response.data);
          
          window.location.href ="/main"
        } else {
          window.alert("Login failed");
        }
      });
  };
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        margin: "auto",
        marginTop: "10vh",
        paddingTop: "5vh",
        alignItems: "center",
        height: "25vh",
        minHeight:"200px",
        minWidth:"300px",
        width: "50vh",
        position: "center",
        backgroundColor: "rgba(201, 201, 201, 0.8)"
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: "sans-serif" }}>
        TimeHub
      </Typography>
      <TextField
        onChange={(e) => {
          SetUsername(e.target.value);
        }}
        id="usernameInput"
        label="Username"
        variant="filled"
      />
      <TextField
        onChange={(e) => {
          SetPassword(e.target.value);
        }}
        id="passwordInput"
        label="Password"
        type="password"
        variant="filled"
      />
      <Button
        sx={{ marginTop: "2vh" }}
        variant="outlined"
        onClick={CheckLoginData}
      >
        Login
      </Button>
    </Paper>
  );
};
