import React from 'react'
import SingleChat from './SingleChat/SingleChat'

const UserWithoutAdminList = props =>{
    let chats = props.emptyChats.map(el => <SingleChat key={el.id} id={el.id} user={el.user}
                                                       takeChat={props.takeChat} adminname={props.adminname}/>);

    return (
        <div>
            {chats}
        </div>
    )
};

export default UserWithoutAdminList;