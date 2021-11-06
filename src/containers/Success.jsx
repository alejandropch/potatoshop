import React,{useContext} from 'react'
import AppContext  from '../context/AppContext'
import Map from '../components/Map'
import '../styles/components/Success.css'

export default function Success() {
  const {state}=useContext(AppContext)
  const {buyer}=state
  
  return (
    <div>
      <div className="Success">
        <div className="Success-content">
          <h2>{`${buyer.name} Thanks for your purchase:)`}</h2>
          <span>Your item will arrive in 3 days to your address!</span>
          <div className="Success-map">
            <Map />
            </div>
        </div>
      </div>
    </div>
  )
}
