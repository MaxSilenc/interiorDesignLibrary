import React from 'react';
import CommentsList from './../../AdminPanel/AdminMain/Chats/MessagesList/CommentsList'
import CommenstForm from  './../../AdminPanel/AdminMain/Chats/MessagesForm/CommenstForm'
import Styles from "./chat.module.css";

const Chat = (props) =>{
    return (
        <div className={Styles.main}>
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>Chat</h2>
            </div>
            <div className={Styles.chat}>
                <CommentsList comments={props.messages} user={props.user} updateComment={props.updateMessage}/>
                <CommenstForm thisProject={props.chat.id} addComment={props.addMessage}/>
            </div>
        </div>
    )
};

export default Chat;