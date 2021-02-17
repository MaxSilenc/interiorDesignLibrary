import React from 'react';
import Styles from './navLink.module.css'
import {NavLink} from "react-router-dom";

const NavLinks = (props) => {
    let path = "/projects/all/all";
    if (props.whatChange === 'type'){
        path = "/projects/" + props.nowTheme + "/" + props.name;
        return (
            <NavLink to={path} onClick={() => {props.onClickSetTheme(props.nowTheme, props.name)}}>{props.name}</NavLink>
        )
    }
    else{
        path = "/projects/" + props.name + "/" + props.nowType;
        return (
            <NavLink to={path} onClick={() => {props.onClickSetTheme(props.name, props.nowType)}}>{props.name}</NavLink>
        )
    }
};

export default NavLinks