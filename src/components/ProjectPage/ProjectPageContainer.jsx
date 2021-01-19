import React from 'react';
import ProjectPage from "./ProjectPage";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        state: state.commentsBlockPage
    }
};



const ProjectsContainer = connect(mapStateToProps)(ProjectPage);


export default ProjectsContainer;