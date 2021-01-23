import React from 'react';
import ProjectPage from './ProjectPage'
import {addCommentActionCreator, updateNewCommentActionCreator,
    setThisProjectCommentActionCreator} from "../../state/commentsFormReducer";
import {connect} from "react-redux";
import * as axios from "axios";

class ProjectPageComponent extends React.Component {

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/projectPage/4").then(respons => {
            console.log(respons.data)
            this.props.setProject(respons.data);
        });
    }

    render(){
        return (
            <ProjectPage {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.commentsBlockPage
    }
};

const ProjectPageContainer = connect(mapStateToProps, {
    updateNewComment: updateNewCommentActionCreator,
    addComment: addCommentActionCreator,
    setProject: setThisProjectCommentActionCreator
})(ProjectPageComponent);

export default ProjectPageContainer;