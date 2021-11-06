import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Checkout.css'
import AppContext from '../context/AppContext'
import getTotalPrice from '../utils/index'

export default function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const {state, removeFromCart}=useContext(AppContext)
  const {cart}=state


  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Items list</h3>
        {
          cart.length>0 ? 

          cart.map((item)=>(
            <div className="Checkout-item"> 

              <div className="Checkout-element">
                <h4>{item.title} </h4>
                <span>${item.price}</span>
              </div>
              <button className="btn" type="button" onClick={()=>{removeFromCart(item)}}>
                <i className="fas fa-solid fa-trash" />
              </button>
            </div>
            )
          )
              
            :
              <div className="Checkout-element">
                <h4>This looks empty </h4>
              </div>
        }
     
      </div>
      <div className="Checkout-sidebar">
        <h3>{`Total price: $${getTotalPrice(cart)}`}</h3>
        <Link to="/checkout/information">
          <button type="button">Proceed to checkout</button>
        </Link>
      </div>
    </div>
  )
}
