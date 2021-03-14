import React from 'react'
import Links from './Links/Links'
import UserWithoutAdminList from "./UserWithoutAdminList/UserWithoutAdminList";
import Chats from './Chats/Chats'
import Styles from './AdminMain.module.css'

const AdminPanel = props =>{
    return (
        <div className={Styles.main}>
            <Links userStatus={props.user.status}/>
            <UserWithoutAdminList emptyChats={props.emptyChats} takeChat={props.takeChat} adminname={props.user.login}/>
            <Chats user={props.user} myChatsList={props.myChatsList} myMessages={props.myMessages} openChat={props.openChat}
                   updateMessage={props.updateMessage} addMessage={props.addMessage} thisProject={props.thisProject}/>
        </div>
    )
};

export default AdminPanel