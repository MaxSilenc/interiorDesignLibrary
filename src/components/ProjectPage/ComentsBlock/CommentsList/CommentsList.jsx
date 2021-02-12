import React from 'react';
import Styles from './commentsList.module.css'
import CommentContainer from './Comment/CommentContainer'
const CommentsList = (props) =>{
    let CommentElement = props.comments.map(el => <CommentContainer author={el.author}
                                                                 text={el.text}
                                                                 project_id={el.project_id}
                                                                 id={el.id}
                                                                 key={el.id + 'element'} user={props.user.login}
                                                                 updateComment={props.updateComment}/>);
    return (
        <div className={Styles.list}>
            {CommentElement}
        </div>
    );
};
export default CommentsList
