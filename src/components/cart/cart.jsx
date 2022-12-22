import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/selector";
import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { toggleCartHidden } from "../../redux/cart/action";

import "./cart.scss";

const Cart = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateTOProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateTOProps)(Cart));
