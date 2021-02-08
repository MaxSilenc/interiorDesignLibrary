import React from 'react';
import Styles from './project.module.css'
import ProjectBlock from './ProjectBlock/ProjectBlock'

const Project = ({title, text, directLink, id, img, name}) =>{
    return (
        <div>
            <ProjectBlock title={title} text={text} directLink={directLink} id={id} img={img} name={name}/>
        </div>
    );
};

export default Project;

