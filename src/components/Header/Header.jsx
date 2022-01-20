import Logo from "../../assets/crown.svg?component";
import { auth } from "../../FireBase/FireBaseUtil";
import { useSelector } from "react-redux";
import { CartIcon } from "../CartIcon/CartIcon";
import { CartDropdown } from "../CartDropdown/CartDropdown";
import { getCurrentUser } from "../../redux/userSlice";
import { getHidden } from "../../redux/cartSlice";
import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./HeaderStyles";

export const Header = React.memo(() => {
  const currentUser = useSelector(getCurrentUser);
  const hidden = useSelector(getHidden);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="shop">SHOP</OptionLink>
        <OptionLink to="shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
});
