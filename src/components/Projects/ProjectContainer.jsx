import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'
import {setProjectsActionCreator} from "../../state/projectsPageReducer";


let mapStateToProps = (state) => {
    return {
        state: state.projectsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setProjects: (ProjectsArr) => {dispatch(setProjectsActionCreator(ProjectsArr))}
    }
};


const ProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(Projects);


export default ProjectsContainer;