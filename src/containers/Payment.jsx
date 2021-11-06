import React,{useContext} from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import {useHistory} from 'react-router-dom'
import AppContext from '../context/AppContext'
import getTotalPrice from '../utils/index'
import '../styles/components/Payment.css'

export default function Payment() {

  
  const {state,addNewOrder} = useContext(AppContext)
  const history= useHistory()
  const {cart,buyer} = state;

  const paypalOptions={
    clientId:'access_token$sandbox$mxwfsc5hgfqjzmvg$943f2411fea655c00512f5a2c08cfe8d',
    intent:'capture',
    currency:'USD'
  }
  const buttonStyles={
    layout:'vertical',
    shape:'rect',
  }

 
const handlePaymentSuccess=data=>{
    if(data.status==='COMPLETED'){
      const newOrder={

        buyer,
        products:cart,
        payment:data
      }
      history.push('/checkout/success')
      
      addNewOrder(newOrder);
    }

}
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Items list</h3>
        {cart.map((item)=>(

          <div className="Payment-item" key={item.idpurchase}>
           <div className="Payment-element">
           <h4>{item.title}</h4><span> ${item.price}</span>

           </div>
          </div>

        ))}
        <div className="Payment-button">
          <PayPalButton 

            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={getTotalPrice(cart)}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}

            />

          
        </div>
      </div>
    </div>
  )
}
