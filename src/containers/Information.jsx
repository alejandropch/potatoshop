import React,{ useRef, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/components/Information.css'
import AppContext from '../context/AppContext'


export default function Information() {
  // eslint-disable-next-line no-unused-vars
  const {state, addToBuyer}= useContext(AppContext)
  const form=useRef(null)
  const history=useHistory()
  const {cart}=state

const handleSubmit=()=>{ 
  const formData = new FormData(form.current);
  const buyer = Object.fromEntries(formData);
  addToBuyer(buyer)

    history.push('/checkout/payment')
    
  }


  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact information</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
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
          <div className="Information-back">
            <Link to='/checkout'>
              Go back
            </Link>
            </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}> Place order</button>
          </div>
        </div>
      </div>

      <div className="Information-sidebar">
        <h3>Products: </h3>
        {

          Object.keys(cart).length>0?

          cart.map(item=>(

          <div className="Information-item" key={item.idpurchase}>
          <div className="Information-element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
          </div>
          )
         )
         : 
         <div className="Information-item">
         <div className="Information-element">
           <h4>Your cart looks empty :(</h4>
          
         </div>
         </div>
        }
        
      </div>
    </div>
  )
}
