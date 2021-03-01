import React from 'react'
import Links from './Links/Links'
import UserWithoutAdminList from "./UserWithoutAdminList/UserWithoutAdminList";

const AdminPanel = props =>{
    return (
        <div>
            <h1>AdminMain</h1>
            <h1>padding</h1>
            <Links userStatus={props.user.status}/>
            <UserWithoutAdminList emptyChats={props.emptyChats} takeChat={props.takeChat} adminname={props.user.login}/>
        </div>
    )
};

export default AdminPanel