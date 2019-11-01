import React from 'react'
import { MDBContainer } from "mdbreact";
import ProductListing from '../features/product-listing'
import data from '../data/products.json'


export default function HomePage(props) {
  return (
    <MDBContainer>
      <h2 className="mt-2 mb-2">Homepage</h2>
      <ProductListing products={data.products} />

    </MDBContainer>
  )
}