import React from 'react'
import { connect } from 'react-redux'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';

function sort(items) {
  return items.sort((a, b) => a.id < b.id)
}

function Cart(props) {
  return (
    <MDBTable responsive>
      <MDBTableHead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
          <th>Sum, $</th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          sort(props.cart).map(item => <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td> <MDBBtn outline color="success" size="sm" onClick={() => props.addToCart(item)}>+</MDBBtn></td>
            <td><MDBBtn outline color="danger" size="sm" onClick={() => props.removeFromCart(item)}>-</MDBBtn></td>
            <td>{item.price * item.quantity}</td>
            <td><MDBBtn color="danger" onClick={() => props.removeAllFromCart(item)}>Remove all</MDBBtn></td>
          </tr>)
        }
        <tr>
          <td colSpan='4'><h4 className="h4">Total</h4></td>
          <td><b className="h4">{props.total}$</b></td>
          <td></td>
        </tr>
      </MDBTableBody>
    </MDBTable>

  )
}

function mapStateToProps(state) {
  const cart = state.cart;
  return {
    cart,
    total: cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0)
  }
}

function mapDispatchProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: 'ADD', payload: item })
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item })
    },
    removeAllFromCart: (item) => {
      dispatch({ type: 'REMOVE_ALL', payload: item })
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Cart)