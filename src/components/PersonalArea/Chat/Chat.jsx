import React from 'react';
import CommentsList from './../../ProjectPage/ComentsBlock/CommentsList/CommentsList'
import CommenstForm from  './../../ProjectPage/ComentsBlock/CommentsForm/CommenstForm'

const Chat = (props) =>{
    return (
        <div>
            <h1>Chat</h1>
            <CommentsList comments={props.messages} user={props.user} updateComment={props.updateMessage}/>
            <CommenstForm thisProject={props.chat.id} addComment={props.addMessage}/>
        </div>
    )
};

export default Chat;