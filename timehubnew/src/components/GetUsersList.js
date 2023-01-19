import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Paper, Typography } from '@mui/material'
import { Container, padding } from '@mui/system'




const GetUsersList = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/users")
    .then(res =>{
      setUsers(res.data)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])
  console.log(users)


  return(
    <Container sx={{
      display:"flex",
      flexDirection:"column",
      margin:"auto",
      padding:"2vh"
    }}>
        {users.map((user)=>(
          <Paper sx={{
            display:"flex",
            flexDirection:"row",
            minHeight:"10vh",
            backgroundColor:"rgba(37, 65, 246, 0.26)",
            margin:"1vh",
            padding:"1vh"
            
          }}>
            <Link to={"main/user/"+user.id}>
              <Typography sx={{
                fontFamily:"monospace",
                textDecoration:"none",
                fontWeight:700
            
              }} variant='h5'>{user.fname} {user.lname}</Typography>
              <Typography
              sx={{
                textDecoration:"none",
                fontWeight:300
            
              }}
              >{user.role}</Typography>
            </Link>
          </Paper>
        ))}
    </Container>
  )
}



export default GetUsersList