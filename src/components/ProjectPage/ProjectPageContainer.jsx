import React from 'react';
import ProjectPage from './ProjectPage'
import {addCommentActionCreator, updateNewCommentActionCreator,
    getCurrProjectThunk} from "../../state/commentsFormReducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'


class ProjectPageComponent extends React.Component {

    componentDidMount() {
        let projectId = this.props.match.params.projectId;
        if (!projectId) projectId = 4;
        this.props.getCurrProject(projectId);
    }

    render(){
        return (
            <ProjectPage {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.commentsBlockPage,
        user: state.auth
    }
};

let withRoutPC = withRouter(ProjectPageComponent);

const ProjectPageContainer = connect(mapStateToProps, {
    updateNewComment: updateNewCommentActionCreator,
    addComment: addCommentActionCreator,
    getCurrProject: getCurrProjectThunk
})(withRoutPC);

export default ProjectPageContainer;