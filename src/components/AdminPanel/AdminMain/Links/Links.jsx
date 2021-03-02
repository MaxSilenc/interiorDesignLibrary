import React from 'react'
import {NavLink} from "react-router-dom";

const Links = props =>{
    return (
        <div>
            <NavLink to={'/userList'}>users</NavLink>
            <br/>
            <NavLink to={'/projectsManager'}>projects manager</NavLink>
            <br/>
            <NavLink to={'/statistics'}>statistics</NavLink>
        </div>
    )
};

export default Links;