const cartWhitoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)
const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [...cartWhitoutItem(cart, item), { ...item, quantity: 1 }]
    : [...cartWhitoutItem(cart, item), { ...cartItem, quantity: cartItem.quantity + 1 }]
}

const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWhitoutItem(cart, item)]
    : [...cartWhitoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
}

const removeAllFromCart = (cart, item) => {
  return [...cartWhitoutItem(cart, item)]
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      return addToCart(state, action.payload)

    case 'REMOVE':
      return removeFromCart(state, action.payload)

    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload)

    default:
      return state;
  }
}

export default cartReducer