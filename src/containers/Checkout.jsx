import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/Checkout.css'
 
export default function Checkout() {
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                
                <h3>Items list</h3>
                <div className="Checkout-item">
                    <div className="Checkout-element">
                        <h4>Item: </h4><span>$5</span>
                    </div>
                    <button className="btn" type="button">
                        <i className="fas fa-solid fa-trash"/>
                    </button>
                </div>
                
            </div>
            <div className="Checkout-sidebar">
                <h3>Total price: $5</h3>
                <Link to="/checkout/information">
                <button type="button">Proceed to checkout</button>
                </Link>
            </div>
        </div>
    )
}
