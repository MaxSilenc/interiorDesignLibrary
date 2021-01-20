import React from 'react';
import CommentsForm from "./CommenstForm";
import {connect} from 'react-redux'
import {updateNewCommentActionCreator, addCommentActionCreator} from "../../../../state/commentsFormReducer";


let mapStateToProps = (state) => {
    return {
        state: state.commentsBlockPage.NewCommentInput
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewComment: (text) => {dispatch(updateNewCommentActionCreator(text))},
        addComment: () => {dispatch(addCommentActionCreator())}
    }
};


const CommentsFormContainer = connect(mapStateToProps, mapDispatchToProps)(CommentsForm);


export default CommentsFormContainer;