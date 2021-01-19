import React from 'react';
import Styles from './commentsList.module.css'
import Comment from './Comment/Comment'
import NavLinks from "../../../NavLink/NavLink";

const CommentsList = (props) =>{
    let CommentElement = props.state.comments.map(el => <Comment author={el.author} text={el.text} key={el.id}/>);
    return (
        <div>
            {CommentElement}
        </div>
    );
};

export default CommentsList;
