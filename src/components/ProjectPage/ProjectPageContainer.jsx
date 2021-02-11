import React from 'react';
import ProjectPage from './ProjectPage'
import {addCommentThunk,
    getCurrProjectThunk, updateCommentThunk} from "../../state/commentsFormReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from 'react-router-dom'
import {getAuthDude, getCommentsBlockPage} from "../../selectors/selectors";


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
        state: getCommentsBlockPage(state),
        user: getAuthDude(state)
    }
};


export default compose(
    connect(mapStateToProps, {
        addComment: addCommentThunk,
        getCurrProject: getCurrProjectThunk,
        updateComment: updateCommentThunk,
    }),
    withRouter
)(ProjectPageComponent);