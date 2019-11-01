import React from 'react'
import { MDBBtn } from "mdbreact";

export default function RemoveButton(props) {
  return (
    <MDBBtn color="danger"
      onClick={() => props.removeFromCart(props.cartItem)}
    >
      Remove
    </MDBBtn>
  )
}