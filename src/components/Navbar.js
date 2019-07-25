import {
    Collapse,
    Navbar as Navigation,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../css/Navbar.css'


class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navigation dark expand="md">
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>


                    <Nav className="mx-auto" >
                        <NavItem>
                            <NavLink tag={Link} exact to="/" className="inactive" activeClassName="active">
                                <h3>HOME</h3>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/movies" className="inactive" activeClassName="active">
                                <h3>MOVIES </h3>
                            </NavLink>

                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/shows" className="inactive" activeClassName="active">
                                <h3>SHOWS</h3>
                            </NavLink>
                        </NavItem>



                    </Nav>
                </Collapse>
            </Navigation>

        )
    }
}

export default Navbar;
