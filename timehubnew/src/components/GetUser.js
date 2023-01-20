import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const GetUser = (id) => {
    const [user,setUser] = useState([])
    const userId = id
    console.log(userId)

  useEffect(() => {
    axios
      .post("http://localhost:8080/user",{id:userId})
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return user 
};

export default GetUser;
