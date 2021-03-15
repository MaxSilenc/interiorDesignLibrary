import React from 'react'
import {NavLink} from "react-router-dom";

const SingleChat = props =>{

    const openChatOnClick = () =>{
        props.openChat(props.username)
    };

    return (
        <div>
            <NavLink to={'/admin/' + props.username + '/' + props.id} onClick={() => openChatOnClick()}>
                {props.nowChat === props.username ?
                    <button className="btn btn-outline-info">{props.username}</button>
                    :
                    <button className="btn btn-outline-dark">{props.username}</button>
                }
            </NavLink>
        </div>
    )
};

export default SingleChat;