import React from 'react';
import Styles from './projects.module.css'
import Project from './Project/Project'

const Projects = () => {
    return (
        <div className={Styles.projects}>
            <Project/>
            <Project/>
            <Project/>
        </div>
    )
}

export default Projects;