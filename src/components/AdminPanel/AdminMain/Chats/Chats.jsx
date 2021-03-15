import React from 'react'
import CommenstForm from './MessagesForm/CommenstForm'
import CommentsList from './MessagesList/CommentsList'
import ChatsList from './ChatsList/ChatsList'
import Styles from "./chats.module.css";
import UserWithoutAdminList from "../UserWithoutAdminList/UserWithoutAdminList";

const Chats = props =>{
    return (
        <div className={Styles.main}>
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>Chats</h2>
            </div>
            <div className={Styles.form}>
                <div className={Styles.block1}>
                    <ChatsList myChatsList={props.myChatsList} openChat={props.openChat} nowChat={props.nowChat}/>
                </div>
                <div className={Styles.block2}>
                    <CommentsList user={props.user} comments={props.myMessages} updateComment={props.updateMessage}/>
                </div>
                <div className={Styles.block4}>
                    <UserWithoutAdminList emptyChats={props.emptyChats} takeChat={props.takeChat} adminname={props.user.login}/>
                </div>
                <div className={Styles.block3}>
                    <CommenstForm addComment={props.addAdminMessage} thisProject={props.thisProject}/>
                </div>
            </div>
        </div>
    )
};

export default Chats