import React from "react";
import { Navbar, Nav } from "reactstrap";

function Header() {
  return (
    <Navbar
      className="sticky-top text-light">
      <Nav>
        <h1>Gluten-free snack recipes</h1>
      </Nav>
    </Navbar>

  );
}

export default Header;