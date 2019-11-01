import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";
import AddButton from './add-btn'
import RemoveButton from './remove-btn'

export default function ProductListItem(props) {
  return (
    <MDBCol lg="4" md="6">
      <MDBCard className="mb-4">
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>{props.product.name}</MDBCardTitle>
          <MDBCardText>{props.product.label}</MDBCardText>
          <p className="font-weight-bold cyan-text">Price ${props.product.price}</p>
          <AddButton
            cartItem={props.cartItem}
            product={props.product}
            addToCart={props.addToCart}
          />

          {
            props.cartItem
              ? <RemoveButton
                cartItem={props.cartItem}
                product={props.product}
                removeFromCart={props.removeFromCart}
              />
              : null
          }
        </MDBCardBody>
      </MDBCard>

    </MDBCol>
  )
}