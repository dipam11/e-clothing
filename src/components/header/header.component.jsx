import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { connect} from "react-redux";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => (
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
      {/* <Link className="option" to='/shop'>
                CONTACT
            </Link> */}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
  

export default connect(mapStateToProps)(Header);
