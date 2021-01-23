import React from 'react';
import Styles from './project.module.css'
import ProjectBlock from './ProjectBlock/ProjectBlock'

const Project = (props) =>{
    return (
        <div>
            <ProjectBlock title={props.title} text={props.text} directLink={props.directLink} id={props.id} img={props.img} name={props.name}/>
        </div>
    );
};

export default Project;

