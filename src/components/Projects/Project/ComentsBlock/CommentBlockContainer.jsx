import React from 'react';
import CommentBlock from "./ComentBlock";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        state: state.commentsBlockPage,
    }
};



const CommentBlockContainer = connect(mapStateToProps)(CommentBlock);


export default CommentBlockContainer;