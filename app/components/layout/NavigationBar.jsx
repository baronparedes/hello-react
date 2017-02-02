'use strict';

import React from 'react';
import { Nav, Navbar, NavItem, NavbarHeader, NavDropdown, MenuItem, Brand } from 'react-bootstrap/lib'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <Navbar className="navbar-custom navbar-fixed-top" role="navigation" collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Magenic Masters - React JS</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <IndexLinkContainer to="/">
                                <NavItem eventKey={1}>Home</NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to="tasks">
                                <NavItem eventKey={2}>Tasks</NavItem>
                            </LinkContainer>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
