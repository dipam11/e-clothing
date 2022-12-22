import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CardIcon from "../cart-icon/cart-icon";
import { selectCartHidden } from "../../redux/cart/selector";
import { selectCurrentUser } from "../../redux/user/selector";
import Cart from "../cart/cart";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="loho" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CardIcon />
    </div>
    {hidden ? null : <Cart />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden : selectCartHidden,
});
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser,
//   hidden : selectCartHidden(state),
// });

export default connect(mapStateToProps)(Header);
