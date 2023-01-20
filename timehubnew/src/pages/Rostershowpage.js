import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

//////THIS IS THE PAGE FOR THE ROSTER SHOW

const Rostershowpage = (props) => {
  const { id } = useParams();
  const [RosterExists, SetRosterExists] = useState(Boolean);
  const [WorkRoster, SetWorkRoster] = useState({});
  SetRosterExists(false)
  const navigate = useNavigate()
  let workRoster;

  useEffect(() => {
    console.log({ id });

    const SendRoster = async () => {
      await axios
        .post("http://localhost:8080/findRoster", { id })
        .then((response) => {
          console.log(response.data.exists);
          SetWorkRoster(response.data.result)
          
          SetRosterExists(response.data.exists);
        })
        .catch((err) => {
          window.alert("error encountered");
          SetRosterExists(false)
        });
    };
    SendRoster();
  }, []);

  const GenerateRoster = async()=>{
    await axios.post("http://localhost:8080/generateRoster",{id})
    .then((response)=>{
        if(response.data.success){
            window.alert("Roster generated")
            navigate("/main/roster/"+{id})
        }
    }).catch((err)=>{
        window.alert("error encountered when generating roster")
    })

  }


  if(RosterExists){
    return(
        <Paper
        sx={{
            width:"60vh",
            height:"80vh",
            minHeight:"700px",
            minWidth:"200px",
            display:"flex",
            flexDirection:"column",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            margin:"auto",
            border:"1vh",
            padding:"1vh",
            backgroundColor: "rgba(213, 217, 218, 0.4)",
        }}>
            <Typography>{WorkRoster.name}</Typography>
            {WorkRoster.workdays.map((workday=>(
                <Box>
                    <Typography></Typography>
                </Box>
            )))}
            
        </Paper>
  )}
  if(!RosterExists){
    return(
        <Paper
        sx={{
            width:"60vh",
            height:"80vh",
            minHeight:"700px",
            minWidth:"200px",
            display:"flex",
            flexDirection:"column",
            flexWrap:"wrap",
            justifyContent:"space-evenly",
            margin:"auto",
            border:"1vh",
            padding:"1vh",
            backgroundColor: "rgba(213, 217, 218, 0.4)",
        }}>
            <Button onClick={GenerateRoster}>Generate Work Roster</Button>
        </Paper>
    )
  }
};

Rostershowpage.propTypes = {};

export default Rostershowpage;
