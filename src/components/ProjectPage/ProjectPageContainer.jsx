import React from 'react';
import ProjectPage from './ProjectPage'
import {addCommentActionCreator, updateNewCommentActionCreator,
    setThisProjectCommentActionCreator} from "../../state/commentsFormReducer";
import {connect} from "react-redux";
import * as axios from "axios";
import {withRouter} from 'react-router-dom'


class ProjectPageComponent extends React.Component {

    componentDidMount() {
        debugger
        let projectId = this.props.match.params.projectId;
        if (!projectId) projectId = 4;
        axios.get("http://127.0.0.1:8000/projectPage/" + projectId).then(respons => {
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

let withRoutPC = withRouter(ProjectPageComponent);

const ProjectPageContainer = connect(mapStateToProps, {
    updateNewComment: updateNewCommentActionCreator,
    addComment: addCommentActionCreator,
    setProject: setThisProjectCommentActionCreator
})(withRoutPC);

export default ProjectPageContainer;