import React from 'react'
import { connect } from 'react-redux'
import { MDBContainer } from 'mdbreact';

import Cart from '../cart'

function Checkout(props) {
  const { cart } = props
  return (
    <div>
      <Cart />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Checkout)