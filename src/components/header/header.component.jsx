import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import AuthService from "../../services/auth.service";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import {
  HeaderContainer,
  BrandContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  UserLink
} from "./header.styles";

export const Header = ({ user, userPath, hidden }) => (
  <HeaderContainer>
    <BrandContainer to="/">
      <LogoContainer>
        <Logo />
      </LogoContainer>
      Ingrid
    </BrandContainer>
    <OptionsContainer>
      {user ? <UserLink to={userPath}>{user.username}'S PAGE</UserLink> : ""}
      <OptionLink to="/shop">SHOP</OptionLink>
      {user ? (
        <OptionLink as="div" onClick={AuthService.logout}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
