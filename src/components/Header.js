import React from "react";
import { Navbar, Nav } from "reactstrap";

function Header() {
  return (
    <Navbar
      className="sticky-top bg-primary text-light shadow">
      <Nav>
        <h1>Gluten-free snack recipe generator</h1>
      </Nav>
    </Navbar>

  );
}

export default Header;