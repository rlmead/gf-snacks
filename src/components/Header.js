import React from "react";
import { Navbar, Nav } from "reactstrap";

function Header() {
  return (
    <Navbar
      className="sticky-top text-light">
      <Nav>
        <h1>Random gluten-free snack recipe generator</h1>
      </Nav>
    </Navbar>

  );
}

export default Header;