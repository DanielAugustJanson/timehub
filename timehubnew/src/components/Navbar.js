import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: 'none', color:"white" }} to={"/main"}>
            <Typography variant="h5" id="homeButton" >TimeHub</Typography>
          </Link>
          <Container sx={{
            display:"flex",
            margin:"auto",
            padding:"2vh"

          }}>
            <Link style={{ textDecoration: 'none', color:"white" }}  to={"/main/users"}>
              <Typography variant="h6" sx={{padding:"1vh"}} id="navButton">Users</Typography>
            </Link>
            <Link style={{ textDecoration: 'none', color:"white" }} reloadDocument to={"/main/users/"+localStorage.getItem("userId")}>
              <Typography variant="h6" sx={{padding:"1vh"}} id="navButton">Profile</Typography>
            </Link>
            <Link  style={{ textDecoration: 'none', color:"white" }} to={"/main/roster"}>
              <Typography variant="h6" sx={{padding:"1vh"}} id="navButton">Roster</Typography>
            </Link>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
