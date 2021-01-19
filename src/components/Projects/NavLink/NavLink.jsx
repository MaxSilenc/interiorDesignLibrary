import React from 'react';
import Styles from './navLink.module.css'
import {NavLink} from "react-router-dom";

const NavLinks = (props) => {
    let path = "/projects/theme" + props.id;
    return (
        <NavLink to={path}>{props.name}</NavLink>
    )
};

export default NavLinks