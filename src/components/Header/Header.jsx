import "./styles.scss";
import Logo from "../../assets/crown.svg?component";
import { Link } from "react-router-dom";
import { auth } from "../../FireBase/FireBaseUtil";
import { useSelector } from "react-redux";
import { CartIcon } from "../CartIcon/CartIcon";
import { CartDropdown } from "../CartDropdown/CartDropdown";
import { getCurrentUser } from "../../redux/userSlice";
import { getHidden } from "../../redux/cartSlice";
import React, { useRef } from "react";

export const Header = React.memo(() => {
  const currentUser = useSelector(getCurrentUser);
  const hidden = useSelector(getHidden);
  const renders = useRef(0);
  console.log("CartIcon renders:", renders.current++);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="shop" className="option">
          SHOP
        </Link>
        <Link to="shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
});
