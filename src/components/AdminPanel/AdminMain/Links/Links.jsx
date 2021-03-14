import React from 'react'
import {NavLink} from "react-router-dom";

const Links = props =>{
    return (
        <div>
            <NavLink to={'/adminUsersPage/1'}>users</NavLink>
            <br/>
            <NavLink to={'/projectsManager/1'}>projects manager</NavLink>
            <br/>
            <NavLink to={'/statisticsAdmin'}>statistics</NavLink>
        </div>
    )
};

export default Links;