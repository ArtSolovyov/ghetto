import React, { useState } from 'react';
import './header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Овервочер</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#"></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Стата профиля
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Стата по героям
                </DropdownItem>
                <DropdownItem>
                  Занимательные факты
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Награды за матчи
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>tg @arthursolo</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;