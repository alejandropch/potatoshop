import React, {useContext} from 'react'
import Product from './Product'
import '../styles/components/Products.css'
import AppContext from '../context/AppContext'

export default function Products() {
  const {state,addToCart}= useContext(AppContext)
  const {products} =state
  const handleAddToCart=(product)=>()=>{
      // Creating a id purchase to identify the item
    // I use the split method to just  get the decimal part of the random number
    const idPurchase=Number(Math.random().toString().split('.')[1])
    const ProductoWithIdPurchase={
      ...product,
      idpurchase: idPurchase
    }





    addToCart(ProductoWithIdPurchase)

  }

   return (
    <div className="Products">
      <div className="Products-items">
        {
        products.map(product => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart(product)}/>
        ))}
      </div>
    </div>
  )
}
