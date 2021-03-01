import React from 'react'
import {NavLink} from "react-router-dom";

const Links = props =>{
    return (
        <div>
            <NavLink to={'/chats'}>my chats</NavLink>
            <br/>
            <NavLink to={'/projectsManager'}>projects manager</NavLink>
        </div>
    )
};

export default Links;