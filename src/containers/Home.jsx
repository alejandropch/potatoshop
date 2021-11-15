import React from 'react'
import {Helmet} from 'react-helmet'
import initialState from '../../initialState'
import Products from '../components/Products'

export default function Home() {
  return (
    <>
  <Helmet>
    <title>Potato Shop - Products</title>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@alejantropper"/>
    <meta name="twitter:creator" content="@alejantropper"/>
    <meta name="twitter:title" content="Potato Shop - Products"/>
    <meta name="twitter:description" content="Potato Shop - Products"/>
    <meta property="og:title" content="Potato Shop - Products"/>
    <meta property="og:description" content="Potato Shop - Products"/>
    <meta property="og:url" content="potato-shop-331316.web.app" />
    <meta property="og:site_name" content="Potato Shop - Products" />
    <meta property="og:locale" content="en_EN" />
    <meta property="og:type" content="article" />
  </Helmet>
  <Products products={initialState.products} />
  </>

  )
}
