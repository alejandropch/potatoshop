import { useState } from 'react'
import initialState from '../../initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
  
    setState({
      ...state,
      // bring all the cart and the add it what payload is carrying
      cart: [...state.cart, payload],
    })
 
  }
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter( items =>(items.idpurchase !== payload.idpurchase))
    
  })}

  // eslint-disable-next-line no-unused-vars
  const addToBuyer = (buyer) => {}
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
  }
}

export default useInitialState
