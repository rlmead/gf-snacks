import React from "react";
import { Navbar, Nav } from "reactstrap";

function Footer() {
  return (
    <Navbar
      className="fixed-bottom bg-success text-light">
      <Nav
        className="mx-auto">
        <p className="mb-auto">
          These recipes are only ok. <a className="text-light" href="https://books2read.com/u/mejzKV"><u>Get the good stuff here.</u></a>
        </p>
      </Nav>
    </Navbar>

  );
}

export default Footer;