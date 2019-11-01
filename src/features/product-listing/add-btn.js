import React from 'react'
import { MDBBtn } from "mdbreact";

export default function AddButton(props) {
  return (
    <MDBBtn
      onClick={() => props.addToCart(props.product)}
    >
      Add to cart  ({(props.cartItem && props.cartItem.quantity) || 0})
    </MDBBtn>
  )
}