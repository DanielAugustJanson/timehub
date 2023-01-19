import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { FindRoster } from '../components/FindRoster'

export const Rosterfindpage = () => {
  
  return (
    <div>
        <FindRoster></FindRoster>
        <Outlet/>
    </div>
  )
}
