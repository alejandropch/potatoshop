import {useState} from 'react'
import initialState from '../../initialState'

const useInitialState =()=>{

    const [state,setState] = useState(initialState)

    const addToCart= payload =>{
        setState({
            ...state,
            // bring all the cart and the add it what payload is carrying 
            cart:[...state.cart, payload],
        })

    }
    const removeFromCart=payload=>{
        setState({
            ...state,
            cart: state.cart.filter(items=>items.id !== payload.id)

        })
    }
    return {
        addToCart,
        removeFromCart,
        state
    }

}

export default useInitialState;