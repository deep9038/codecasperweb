import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLink,
  NavBtn,
  NavItem,
  NavBTnLink
} from "./NavbarElimants";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">CodeCasper</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover">discover</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="survice">survice</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="sign-up">sign-up</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBTnLink to='sign-up' > ssign-up</NavBTnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
