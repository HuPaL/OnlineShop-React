import React from 'react'
import ProductListItem from './product-list-item'
import { MDBRow } from "mdbreact";
import { connect } from 'react-redux';

function ProductListing(props) {
  return (

    <MDBRow>
      {
        props.products.map(product =>
          <ProductListItem
            product={product}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
          />)
      }
    </MDBRow>
  )
}

function mapStateProps(state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    }
  }
}

export default connect(mapStateProps, mapDispatchToProps)(ProductListing)