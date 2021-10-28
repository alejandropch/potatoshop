import React from 'react'
import '../styles/components/Success.css'

export default function Success() {
  return (
    <div>
      <div className="Success">
        <div className="Success-content">
          <h2>Thanks for your purchase:)</h2>
          <span>Your item will arrive in 3 days to your address!</span>
          <div className="Success-map">google maps</div>
        </div>
      </div>
    </div>
  )
}
