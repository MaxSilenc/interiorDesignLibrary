import React from 'react'
import ProjectsList from './ProjectsList/ProjectsList'
import ProjectsFrom from './ProjectsForm/ProjectsForm'

const AdminProjects = props =>{
    return (
        <div>
            <h1>AdminProjects</h1>
            <h1>padding</h1>
            <ProjectsList projects={props.projects}/>
            <ProjectsFrom themes={props.themes} types={props.types}/>
        </div>
    )
};

export default AdminProjects;