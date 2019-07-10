import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {};

    // }

    render() {
        return (
            <div>
                <ul>
                    <NavLink to="/"> <li>Home</li> </NavLink>
                    <NavLink to="/shows"> <li>TV Shows</li> </NavLink>
                    <NavLink to="/movies"> <li>Movies</li> </NavLink>
                </ul>
            </div>
        );
    }


}

export default Navbar;