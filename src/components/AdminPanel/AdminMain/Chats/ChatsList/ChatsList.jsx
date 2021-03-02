import React from 'react'
import SingleChat from './SingleChat/SingleChats'

const ChatsList = props =>{
    let Chats = props.myChatsList.map(el => <SingleChat key={el.id} username={el.user} openChat={props.openChat} id={el.id}/>);

    return (
        <div>
            {Chats}
        </div>
    )
};

export default ChatsList