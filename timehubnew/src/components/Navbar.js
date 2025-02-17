import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/main"}>
            <Typography id="homeButton">TimeHub</Typography>
          </Link>
          <Container sx={{
            display:"flex"
          }}>
            <Link to={"/main/users"}>
              <Typography id="navButton">Users</Typography>
            </Link>
            <Link to={"/main"}>
              <Typography id="navButton">Profile</Typography>
            </Link>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
