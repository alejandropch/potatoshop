import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Information.css'

export default function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact information</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Full name" name="name" id="" />
            <input type="text" placeholder="Email" name="email" id="" />
            <input type="text" placeholder="Address" name="address" id="" />
            <input type="text" placeholder="Second Address" name="apto" id="" />
            <input type="text" placeholder="City" name="city" id="" />
            <input type="text" placeholder="State" name="state" id="" />
            <input type="text" placeholder="Country" name="country" id="" />
            <input type="text" placeholder="Postal code" name="cp" id="" />
            <input type="text" placeholder="Phone number" name="phone" id="" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">Go back</div>
          <div className="Information-next">
            <Link to="/checkout/payment">Purchase</Link>
          </div>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Item: </h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Name of item</h4>
            <span>$5</span>
          </div>
        </div>
      </div>
    </div>
  )
}
