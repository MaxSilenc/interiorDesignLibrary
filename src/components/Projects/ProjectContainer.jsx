import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'
import {setProjectsActionCreator, setPageNumberActionCreator,
    setProjectsCountActionCreator, setIsFetchingActionCreator} from "../../state/projectsPageReducer";
import * as axios from "axios";
import Preloader from './../../components/common/Preloader/Preloader'


class ProjectsComponent extends React.Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.setisFetching(true);
        axios.get("http://127.0.0.1:8000/projects?page=" + this.props.state.nowPage).then(respons => {
            this.props.setisFetching(false);
            this.props.setCount(respons.data.count);
            this.props.setProjects(respons.data.items);
        });
    }

    onClickSetPage(el, props){
        props.setPage(el);
        props.setisFetching(true);
        axios.get("http://127.0.0.1:8000/projects?page=" + el).then(respons => {
            props.setisFetching(false);
            props.setProjects(respons.data.items);
        });
    }

    render() {
        return (
            <>
                {this.props.state.isFetching ? <Preloader/> : null}
                <Projects {...this.props} onClickSetPage={this.onClickSetPage}/>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        state: state.projectsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setProjects: (ProjectsArr) => {dispatch(setProjectsActionCreator(ProjectsArr))},
        setPage: (page) => {dispatch(setPageNumberActionCreator(page))},
        setCount: (count) => {dispatch(setProjectsCountActionCreator(count))},
        setisFetching: (bool) => {dispatch(setIsFetchingActionCreator(bool))}
    }
};


const ProjectsContainer = connect(mapStateToProps,{
    setProjects: setProjectsActionCreator,
    setPage: setPageNumberActionCreator,
    setCount: setProjectsCountActionCreator,
    setisFetching: setIsFetchingActionCreator
})(ProjectsComponent);


export default ProjectsContainer;