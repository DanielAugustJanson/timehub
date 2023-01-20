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
  const [Roster, SetRoster] = useState();
  const navigate = useNavigate()


  useEffect(() => {
    console.log({ id });

    const SendRoster = async () => {
      await axios
        .post("http://localhost:8080/findRoster", { id })
        .then((response) => {
          console.log(response.data.exists);
          console.log(response.data.result)
          //workRoster = response.data.result
          SetRoster(response.data.result)
          
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
  if(Roster){
    return(
        <Paper
        sx={{
            width:"60vh",
            height:"80vh",
            minHeight:"700px",
            minWidth:"200px",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            margin:"auto",
            border:"1vh",
            padding:"1vh",
            backgroundColor: "rgba(213, 217, 218, 0.4)",
        }}>
            <Typography variant="h4">{Roster.name.slice(0, -4)} {Roster.name.slice(-4)}</Typography>
            {Roster.workDays.map((workday=>(
                workday.map(()=>(
                    <Box>
                    <Typography>{workday[0]}</Typography>
                </Box>
                ))
                
            )))}
            
        </Paper>
    )
  }

  if(!Roster){
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


  /*if(Roster){
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
            <Typography>{Roster.name}</Typography>
            {Roster.workdays.map((workday=>(
                <Box>
                    <Typography></Typography>
                </Box>
            )))}
            
        </Paper>
  )}
else{
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
  }*/
};

Rostershowpage.propTypes = {};

export default Rostershowpage;
