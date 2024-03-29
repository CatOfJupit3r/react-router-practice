import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <NavLink to={"."}>Home</NavLink>
            <NavLink to={"books"}>Courses</NavLink>
            <NavLink to={"about"}>About</NavLink>
            <NavLink to={"contacts"}>Contacts</NavLink>
        </nav>
    );
};

export default Menu;