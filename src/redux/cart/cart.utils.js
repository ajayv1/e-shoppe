export const addItemToCart = (cartItems, cartItemToAdd) => {
  const exisitingCartItem = cartItems.find(cartItem => 
    cartItem.id === cartItemToAdd.id
  );
  if (exisitingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id ? 
      {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemFromCart = (cartItems, cartItemToDelete) => {
  if (cartItemToDelete.quantity === 1) {
    return cartItems.filter(cartItem => 
      cartItem.id !== cartItemToDelete.id
    );
  }
  return cartItems.map(cartItem => {
    if (cartItem.id === cartItemToDelete.id) {
      return {
        ...cartItem, 
        quantity: cartItem.quantity - 1
      }
    } 
    return cartItem;
  });
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter(cartItem => 
    cartItem.id !== cartItemToClear.id
  );
};