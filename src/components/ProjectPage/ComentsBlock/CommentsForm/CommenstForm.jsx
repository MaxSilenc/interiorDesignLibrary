import React from 'react';
import Styles from './commentsForm.module'

const CommentsForm = (props) =>{
    let newCommentText = React.createRef();

    let addComment = () => {
        props.addComment();
    };

    let onProjectChange = () => {
        let text = newCommentText.current.value;
        props.updateNewComment(text);
    };


    return (
        <div>
            <form action="">
                <textarea name="" id="" cols="60" rows="5" value={props.state.NewCommentInput.text}
                          onChange={onProjectChange} ref={newCommentText}/>
                <button className="btn btn-primary" type="button">Submit</button>
            </form>
        </div>
    );
};

export default CommentsForm;
