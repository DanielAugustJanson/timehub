import { Button, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link} from 'react-router-dom'

export const FindRoster = () => {

    const [RosterDate,SetRosterDate] = useState({
        month:"",
        year:""
    })

    //For now am gonna leave them as arrays
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const years = ["2023","2024","2025"]
    
    /*const DirectRoster = () =>{
        if(
            RosterDate.month === "" ||
            RosterDate.year === ""
        ){
            window.alert("Please select both fields")
        }else{
            window.location.href="/main/roster/"+RosterDate.month+RosterDate.year
        }
    }*/
    //For now I will leave it up to user to not mess up by leaving values blank 


  return (
    <>
    <Paper sx={{
        width:"20vh",
        minHeight:"20vh",
        minWidth:"10vh",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        position:"fixed",
        left:"0px",
        border:"1vh",
        padding:"1vh",
        backgroundColor: "rgba(213, 217, 218, 0.4)",
    }}>
        <Typography>Select</Typography>
        <Select
        onChange={(e)=>{SetRosterDate({...RosterDate, month: e.target.value})}}>
        {months.map((month) => {
          return <MenuItem key={month} value={month}>{month}</MenuItem>;
        })}
        </Select>
        <Select
        onChange={(e)=>{SetRosterDate({...RosterDate, year: e.target.value})}}
        >
        {years.map((year) => {
          return <MenuItem key={year} value={year}>{year}</MenuItem>;
        })}
        </Select>
        <Link reloadDocument to={"/main/roster/"+RosterDate.month+RosterDate.year}>
        <Button variant='outlined'>Get Roster</Button>
        </Link>
    </Paper>
    </>
  )
}
