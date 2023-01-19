import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GetUsersList from "../components/GetUsersList";

export const Userspage = () => {
  return (
    <>
      <div>
        <GetUsersList />
      </div>
      <div>
        <Link to={"/main/users/new"}>
          <Button
            sx={{
              position: "absolute",
              bottom: "7vh",
              right: "7vh",
            }}
            variant="outlined"
          >
            Create New User
          </Button>
        </Link>
      </div>
    </>
  );
};
