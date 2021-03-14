import React from 'react'
import {NavLink} from "react-router-dom";
import Styles from './links.module.css'

const Links = props =>{
    return (
        <div className={Styles.main}>
            <NavLink to={'/adminUsersPage/1'}><button className="btn btn-outline-dark">users</button></NavLink>
            <NavLink to={'/projectsManager/1'}><button className="btn btn-outline-dark">projects manager</button></NavLink>
            <NavLink to={'/statisticsAdmin'}><button className="btn btn-outline-dark">statistics</button></NavLink>
        </div>
    )
};

export default Links;