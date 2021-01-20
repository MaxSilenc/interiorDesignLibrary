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
                <textarea name="" id="" cols="60" rows="5"
                          onChange={onProjectChange} ref={newCommentText} value={props.state.text}/>
                <button className="btn btn-primary" type="button" onClick={addComment}>Submit</button>
            </form>
        </div>
    );
};

export default CommentsForm;
