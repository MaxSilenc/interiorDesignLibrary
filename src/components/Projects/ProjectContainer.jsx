import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'
import {setProjectsActionCreator, setPageNumberActionCreator, setProjectsCountActionCreator} from "../../state/projectsPageReducer";


let mapStateToProps = (state) => {
    return {
        state: state.projectsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setProjects: (ProjectsArr) => {dispatch(setProjectsActionCreator(ProjectsArr))},
        setPage: (page) => {dispatch(setPageNumberActionCreator(page))},
        setCount: (count) => {dispatch(setProjectsCountActionCreator(count))}
    }
};


const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);


export default ProjectsContainer;