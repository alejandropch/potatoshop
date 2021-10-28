import { useState } from 'react'
import initialState from '../../initialState'

const useInitialState = () => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    // Creating a id purchase to identify the item
    // I use the split method to just  get the decimal part of the random number

    const idPurchase=Math.random().toString().split('.')[1]
    // eslint-disable-next-line no-param-reassign
    payload.idpurchase=idPurchase
    console.log(payload)
    setState({
      ...state,
      // bring all the cart and the add it what payload is carrying
      cart: [...state.cart, payload],
    })
  }
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    })
  }
  return {
    addToCart,
    removeFromCart,
    state,
  }
}

export default useInitialState
