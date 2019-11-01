import React from 'react'
import { MDBContainer } from "mdbreact";
import Cart from '../features/cart'

export default function HomePage(props) {
  return (
    <MDBContainer>
      <h2 className="mt-2 mb-2">My Cart</h2>
      <Cart />
    </MDBContainer>
  )
}