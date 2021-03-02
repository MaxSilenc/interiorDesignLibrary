import React from 'react'
import {NavLink} from "react-router-dom";

const SingleChat = props =>{

    const openChatOnClick = () =>{
        props.openChat(props.username)
    };

    return (
        <div>
            <NavLink to={'/admin/' + props.username + '/' + props.id} onClick={() => openChatOnClick()}>{props.username}</NavLink>
        </div>
    )
};

export default SingleChat;