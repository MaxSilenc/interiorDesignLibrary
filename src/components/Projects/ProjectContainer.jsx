import React from 'react';
import Projects from "./Projects";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        state: state.projectsPage
    }
};



const ProjectsContainer = connect(mapStateToProps)(Projects);


export default ProjectsContainer;