import React from "react";
import {
  Navbar,
  Container,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownButton,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

import "./header.styles.css";

const HeaderComponent = () => {
  return (
    <Navbar bg="light" expand="lg" border="bottom" fixed="top">
      <Container>
        <NavbarBrand>
          <h4>فروشگاه مجازی</h4>
        </NavbarBrand>
        <NavbarToggle
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </NavbarToggle>
        <NavbarCollapse id="navbarCollapse">
          <Nav className="me-4">
            <NavItem active>
              <NavLink href="/" active aria-current="page">
                <h5>خانه</h5>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <h5>تیم‌ما</h5>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <h5>پروژه‌های‌ما</h5>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                <h5>درباره‌ما</h5>
              </NavLink>
            </NavItem>
          </Nav>
          <DropdownButton
            className=" me-auto"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            title="شرکت‌های زیرمجموعه"
          >
            <DropdownItem href="#/action-1">خوشبخت</DropdownItem>
            <DropdownItem href="#/action-2">اگور</DropdownItem>
            <DropdownItem href="#/action-3">کاسپین</DropdownItem>
          </DropdownButton>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
