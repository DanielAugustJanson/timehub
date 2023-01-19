import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const GetUser = (id) => {
    const [user,setUser] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/users",id)
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
