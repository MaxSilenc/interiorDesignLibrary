import React from 'react';
import ProjectPage from "./ProjectPage";
import {connect} from 'react-redux'
import {addCommentActionCreator, updateNewCommentActionCreator} from "../../state/commentsBlockReducer";


let mapStateToProps = (state) => {
    return {
        state: state.commentsBlockPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewComment: (text) => {dispatch(updateNewCommentActionCreator(text))},
        addComment: () => {dispatch(addCommentActionCreator())}
    }
};


const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(ProjectPage);


export default ProjectsContainer;