import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import '../styles/components/Header.css'
import AppContext from '../context/AppContext'

const Header = () =>{

  const {state:{cart}} = useContext(AppContext)

 return(

  <div className="Header">
    <h1 className="Header-title">
      <Link to="/">Potato Shop</Link>
    </h1>
    <p className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
    </p>
    {cart.length>0 && <div className="Header-alert">{cart.length}</div>}
  </div>
)
}
export default Header
