import React from 'react'
import SingleChat from './SingleChat/SingleChats'
import Styles from './ChatList.module.css'

const ChatsList = props =>{
    let Chats = props.myChatsList.map(el => <SingleChat key={el.id}
                                                        username={el.user}
                                                        openChat={props.openChat}
                                                        id={el.id} nowChat={props.nowChat}/>);

    return (
        <div className={Styles.list__scroll}>
            {Chats}
        </div>
    )
};

export default ChatsList