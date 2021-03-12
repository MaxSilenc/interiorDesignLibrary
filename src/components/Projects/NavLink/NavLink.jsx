import React from 'react';
import Styles from './navLink.module.css'
import {NavLink} from "react-router-dom";

const NavLinks = (props) => {
    let path = "/projects/all/all";
    if (props.whatChange === 'type'){
        if (props.search ===  '') {
            path = "/projects/" + props.nowTheme + "/" + props.name + "/" + props.nowPage;
        }
        else {
            path = "/projects/" + props.nowTheme + "/" + props.name + "/" + props.nowPage + '?search=' + props.search;
        }

        return (
            <NavLink to={path} className={Styles.link} onClick={() => {props.onClickSetTheme(props.nowTheme, props.name, props.search)}}>
                <button type="button" className="btn btn-outline-dark">{props.name}</button>
            </NavLink>
        )
    }
    else{
        if (props.search ===  '') {
            path = "/projects/" + props.name + "/" + props.nowType + "/" + props.nowPage;
        }
        else {
            path = "/projects/" + props.name + "/" + props.nowType + "/" + props.nowPage + '?search=' + props.search;
        }
        return (
            <NavLink to={path} className={Styles.link} onClick={() => {props.onClickSetTheme(props.name, props.nowType, props.search)}}>
                <button type="button" className="btn btn-outline-dark">{props.name}</button>
            </NavLink>
        )
    }
};

export default NavLinks