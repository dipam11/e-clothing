export const addItemToCart = (cartItems, cartItemTodd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemTodd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemTodd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : {cartItem}
    );
  }

  return [...cartItems, {...cartItemTodd, quantity: 1 }]
};
