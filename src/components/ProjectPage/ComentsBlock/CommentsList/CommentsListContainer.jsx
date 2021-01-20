import React from 'react';
import CommentsList from "./CommentsList";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        state: state.commentsBlockPage.comments
    }
};


const CommentsListContainer = connect(mapStateToProps)(CommentsList);


export default CommentsListContainer;