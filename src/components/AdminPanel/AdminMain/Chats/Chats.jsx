import React from 'react'
import CommenstForm from './../../../ProjectPage/ComentsBlock/CommentsForm/CommenstForm'
import CommentsList from './../../../ProjectPage/ComentsBlock/CommentsList/CommentsList'
import ChatsList from './ChatsList/ChatsList'

const Chats = props =>{
    return (
        <div>
           <h1>Chats</h1>
            <div>
                <ChatsList myChatsList={props.myChatsList} openChat={props.openChat}/>
                <CommentsList user={props.user} comments={props.myMessages} updateComment={props.updateMessage}/>
                <CommenstForm addComment={props.addMessage} thisProject={props.thisProject}/>
            </div>
        </div>
    )
};

export default Chats