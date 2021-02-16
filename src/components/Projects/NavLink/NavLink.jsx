import React from 'react';
import Styles from './navLink.module.css'
import {NavLink} from "react-router-dom";

const NavLinks = (props) => {
    let path = "/projects/" + props.id;
    return (
        <NavLink to={path} onClick={() => {props.onClickSetTheme(props.id)}}>{props.name}</NavLink>
    )
};

export default NavLinks