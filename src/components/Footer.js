import React from "react";
import { Navbar, Nav, NavItem } from "reactstrap";

function Footer() {
  return (
    <Navbar
      className="fixed-bottom text-light bg-success">
      <Nav
        className="mx-auto">
        <NavItem>
          These recipes are only ok. <a className="text-light" href="#"><u>Get the good stuff here.</u></a>
        </NavItem>
      </Nav>
    </Navbar>

  );
}

export default Footer;