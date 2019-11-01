import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Router from './Router'
import { connect } from 'react-redux'
import {
  MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink
} from "mdbreact";

 const Navigation = ({ cart }) => (

  <MDBNavbar color="default-color" dark expand="md">
    <MDBNavbarNav right>
      <MDBNavItem active>
        <MDBNavLink to="/">Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/cart">Cart({cart.reduce((acc, item) => {
          return acc + item.quantity
        }, 0)})</MDBNavLink>
      </MDBNavItem>
    </MDBNavbarNav>
  </MDBNavbar>
)

class App extends Component {
  render() {
    return (
      <div>
        <Navigation {...this.props} />
        <Router />
      </div>

    );

  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default withRouter(connect(mapStateToProps)(App));
