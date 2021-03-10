import React from 'react';
import Styles from './commentsList.module.css'
import CommentContainer from './Comment/CommentContainer'

const CommentsList = (props) =>{


    if (props.comments.length !== 0)
        return (
            <div className={Styles.list__scroll}>
                {props.comments.map(el => <CommentContainer author={el.author}
                                                            text={el.text}
                                                            project_id={el.project_id}
                                                            id={el.id}
                                                            key={el.id + 'element'} user={props.user.login}
                                                            updateComment={props.updateComment}/>)}
            </div>
        );
    else
        return (
            <div>
                <p>no comments</p>
            </div>);
};
export default CommentsList
