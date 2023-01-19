import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Notfoundpage = () => {
  return (
    <div>
        <Typography variant='h4'>Oops, this page does not exist</Typography>
        <Typography variant='h5'>Try loging in again, maybe it will fix this</Typography>
        <Link to={"/login"}>
            <Typography>To Login and beyond...</Typography>
        </Link>
    </div>
  )
}
