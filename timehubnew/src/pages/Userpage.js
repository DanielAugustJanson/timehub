import { Paper } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

export const Userpage = () => {
    const {id} = useParams()
    

  return (
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

    </Paper>
  )
}
