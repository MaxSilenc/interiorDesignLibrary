import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude} from "../../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import SingleProjectManager from './SingleProjectManager'
import {withRouter} from 'react-router-dom'
import {getCurrProjectThunk, updateProjectThunk, updateCommentThunk} from './../../../../state/singleProjectManageReducer'

class SingleProjectManagerComponent extends React.Component{

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getProjects(id)
    }

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        return (
            <SingleProjectManager {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        comments: state.singleProjectManager.comments,
        currProject: state.singleProjectManager.thisProject,
    }
};



export default compose(
    connect(mapStateToProps,{
        getProjects: getCurrProjectThunk,
        updateProject: updateProjectThunk,
        updateComment: updateCommentThunk
    }),
    withRouter
)(SingleProjectManagerComponent);
