import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude, getProjects, getTypes, getThemes} from "../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import AdminProjects from './AdminProjects'
import {withRouter} from 'react-router-dom'
import {getProjectsThunk, addProjectThunk, setThemesOrType,
    upadteThemesOrTypeThunk, deleteProjectThunk} from  './../../../state/projectsManagerReducer'

class AdminPojectsComponent extends React.Component{

    componentDidMount() {
        let page = this.props.match.params.page;
        if (page === undefined) page = 1;
        let search = this.props.location.search.slice(8);
        this.props.getProjects(page, 'all', 'all', search)
    }

    onClickSetPage = (id, el) =>{
        this.props.getProjects(el, 'all', 'all')
    };

    onClickSetSearch = (searchQ) =>{
        this.props.getProjects(1, 'all', 'all', searchQ)
    };

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        if (!this.props.user.status) return <Redirect to={'/'}/>;
        return (
            <AdminProjects {...this.props} onClickSetPage={this.onClickSetPage} onClickSetSearch={this.onClickSetSearch} nowPage={this.props.match.params.page}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        projects: getProjects(state),
        themes: getThemes(state),
        types: getTypes(state),
        count: state.projectsManager.count,
        search: state.projectsManager.search,
        page: state.projectsManager.nowPage
    }
};



export default compose(
    connect(mapStateToProps,{
        getProjects: getProjectsThunk,
        addProject: addProjectThunk,
        addThemesOrType: setThemesOrType,
        updateThemesOrType: upadteThemesOrTypeThunk,
        deleteProject: deleteProjectThunk
    }),
    withRouter
)(AdminPojectsComponent);
