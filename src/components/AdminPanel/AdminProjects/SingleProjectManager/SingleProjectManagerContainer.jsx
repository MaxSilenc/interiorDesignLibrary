import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude} from "../../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import SingleProjectManager from './SingleProjectManager'
import {withRouter} from 'react-router-dom'
import {getCurrProjectThunk, updateProjectThunk, updateCommentThunk, getCommentsThunk} from './../../../../state/singleProjectManageReducer'

class SingleProjectManagerComponent extends React.Component{
    componentDidMount() {
        let id = this.props.match.params.id;
        let page = this.props.match.params.page;
        this.props.getProjects(id, page)
    }

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        if (!this.props.user.status) return <Redirect to={'/'}/>;
        return (
            <SingleProjectManager {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        comments: state.singleProjectManager.comments,
        currProject: state.singleProjectManager.thisProject,
        count: state.singleProjectManager.count,
    }
};



export default compose(
    connect(mapStateToProps,{
        getProjects: getCurrProjectThunk,
        updateProject: updateProjectThunk,
        updateComment: updateCommentThunk,
        getCommentsForCurrProject: getCommentsThunk
    }),
    withRouter
)(SingleProjectManagerComponent);
