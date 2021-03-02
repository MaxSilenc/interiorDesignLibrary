import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude, getProjects, getTypes, getThemes} from "../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import AdminProjects from './AdminProjects'
import {withRouter} from 'react-router-dom'
import {getProjectsThunk} from  './../../../state/projectsManagerReducer'

class AdminPojectsComponent extends React.Component{

    componentDidMount() {
        this.props.getProjects(0, 'all', 'all')
    }


    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        return (
            <AdminProjects {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        projects: getProjects(state),
        themes: getThemes(state),
        types: getTypes(state)
    }
};



export default compose(
    connect(mapStateToProps,{
        getProjects: getProjectsThunk,
    }),
    withRouter
)(AdminPojectsComponent);
