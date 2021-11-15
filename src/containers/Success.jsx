import React,{useContext} from 'react'
import AppContext  from '../context/AppContext'
import Map from '../components/Map'
 import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css'
  
export default function Success() {
  const {state}=useContext(AppContext)
  const {buyer}=state

  const person= buyer[0]
  const locationFixed=[person.address,person.state,person.country].join(', ').toString()


 const location= useGoogleAddress(locationFixed)
 return (
  <div>
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name} Thanks for your purchase:)`}</h2>
        <span>Your item will arrive in 3 days to your address!</span>
        <div className="Success-map">
         <Map data={location}/>
        

          </div>
      </div>
    </div>
  </div>
)  



}
