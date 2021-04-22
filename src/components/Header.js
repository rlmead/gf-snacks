import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let navItems =
    [
      { to: "https://www.savoringkentucky.com", text: "Inspired by ", linkText: "Rona" },
      { to: "https://also-and.web.app", text: "Built by ", linkText: "Becky" },
      { to: "https://unsplash.com/@brookelark", text: "Photo by ", linkText: "Brooke" }
    ]

  return (
    <Navbar
      className="sticky-top bg-primary text-light shadow navbar-dark">
      <h1>Gluten-free snack recipe generator</h1>
      <NavbarToggler onClick={toggle} />
      <Collapse
        isOpen={isOpen}
        navbar >
        <Nav style={{ display: "flex", flexFlow: "row nowrap" }} navbar>
          {
            navItems.map((item, index) => {
              return (
                <NavItem className="mx-auto">
                  <a key={index} className="nav-link text-light" target="_blank" href={item.to}>{item.text}<u>{item.linkText}</u></a>
                </NavItem>
              )
            })
          }
        </Nav>
      </Collapse>
    </Navbar>

  );
}

export default Header;