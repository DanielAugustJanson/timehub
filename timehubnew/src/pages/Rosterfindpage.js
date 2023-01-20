import React, { useEffect } from 'react'
import { Outlet} from 'react-router-dom'
import { FindRoster } from '../components/FindRoster'

export const Rosterfindpage = () => {
  

  return (
    <div>
        <FindRoster></FindRoster>
        <Outlet/>
    </div>
  )
}


///////THIS IS THE PAGE FOR SEARCH COMPONENT!!!!!