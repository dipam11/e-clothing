import React from "react";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/selector";

import "./cart.scss";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateTOProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateTOProps)(Cart);
