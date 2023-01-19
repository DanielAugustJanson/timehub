import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const Rostershowpage = props => {
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        const SendData = async() =>{
            await axios.post("http://localhost:8080/getroster",id)
            .then((response)=>{
                console.log("GetRoster request sent")
            })
            .catch((err)=>{
                window.alert("Error fetching data")
            })
        }
        SendData()
    },[])

    

  return (
    <div>{id}</div>
  )
}

Rostershowpage.propTypes = {}

export default Rostershowpage