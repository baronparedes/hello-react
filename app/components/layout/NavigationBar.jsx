import React from 'react';
import { Nav, Navbar, NavItem, NavbarHeader, NavDropdown, MenuItem, Brand } from 'react-bootstrap/lib'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import NavigationTaskContainer from './NavigationTaskContainer'

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
                        </Nav>
                        <NavigationTaskContainer />
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}