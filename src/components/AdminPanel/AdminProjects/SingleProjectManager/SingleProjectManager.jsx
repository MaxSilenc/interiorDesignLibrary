import React from 'react';
import UpdateProjectInfo from './updateProjectInfo/UpdateProjectInfo'

const SingleProjectManager = props =>{
    return (
        <div>
            <h1>single project</h1>
            <UpdateProjectInfo updateProject={props.updateProject} currProject={props.currProject}/>
        </div>
    )
};

export default SingleProjectManager;