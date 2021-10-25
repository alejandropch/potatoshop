import React from 'react'
import Product from './Product'
import '../styles/components/Products.css'

export default function Products({products}) {

    return(

    <div className="Products">

        <div className="Products-items">
            {products.map(product=>(
                <Product key={products.id} product={product} />
            ))}

        </div>


    </div>
    )

}
