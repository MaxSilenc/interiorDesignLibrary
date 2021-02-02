import React from 'react';
import Styles from './commentsList.module.css'
import Comment from './Comment/Comment'

const CommentsList = (props) =>{
    let CommentElement = props.state.map(el => <Comment author={el.author}
                                                        text={el.text}
                                                        project_id={el.project_id}
                                                        id={el.id}
                                                        key={el.id} user={props.user.login}
                                                        updateComment={props.updateComment}/>);
    return (
        <div className={Styles.list}>
            {CommentElement}
        </div>
    );
};

export default CommentsList;
