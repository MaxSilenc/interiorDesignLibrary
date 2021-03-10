import React from 'react'
import {NavLink} from "react-router-dom";

const Links = props =>{
    return (
        <div>
            <NavLink to={'/adminUsersPage'}>users</NavLink>
            <br/>
            <NavLink to={'/projectsManager/1'}>projects manager</NavLink>
            <br/>
            <NavLink to={'/statistics'}>statistics</NavLink>
        </div>
    )
};

export default Links;