import {useState, useEffect } from 'react'
import axios from 'axios'


const usePositionStack=address=> {


    const [map,setMap]=useState({})
    const API=`http://api.positionstack.com/v1/forward?access_key=8a70688c8e6cff6190cf581adb3bdb19&query=${address}`


    useEffect(async()=>{

        const response=await axios(API)
    setMap(response.data)
    },[])

    return map
}
export default  usePositionStack
