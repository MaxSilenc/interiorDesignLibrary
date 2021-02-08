import React from 'react';
import Styles from './navLink.module.css'
import {NavLink} from "react-router-dom";

const NavLinks = ({id, name}) => {
    let path = "/projects/theme" + id;
    return (
        <NavLink to={path}>{name}</NavLink>
    )
};

export default NavLinks