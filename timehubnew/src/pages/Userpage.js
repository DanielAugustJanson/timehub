import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useParams } from 'react-router-dom'
import GetUser from '../components/GetUser'

export const Userpage = () => {
    const {id} = useParams()
    
    let userData = GetUser(id);
    console.log(userData)

  return (
    <Paper
    sx={{
        width:"60vh",
        height:"80vh",
        minHeight:"700px",
        minWidth:"300px",
        display:"flex",
        flexDirection:"column",
        flexWrap:"wrap",
        justifyContent:"flex-start",
        margin:"auto",
        border:"1vh",
        padding:"1vh",
        backgroundColor: "rgba(213, 217, 218, 0.4)",
    }}>
        <Box
        sx={{
            padding:"5vh"
        }}>
        <Typography variant='h3'>{userData.fname}</Typography>
        <Typography variant='h3'>{userData.lname}</Typography>
        <Typography variant='h4'>{userData.role}</Typography>
        </Box>
        <Box
        sx={{
            padding:"5vh"
        }}>
            <Typography variant='h6'>{userData.phone}</Typography>
            <Typography variant='h6'>{userData.email}</Typography>
        </Box>
    </Paper>
  )
}
