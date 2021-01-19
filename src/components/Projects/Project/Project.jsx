import React from 'react';
import Styles from './project.module.css'
import ProjectBlock from './ProjectBlock/ProjectBlock'
import CommentBlockContainer from './ComentsBlock/CommentBlockContainer'

const Project = (props) =>{
    return (
        <div>
            <ProjectBlock title={props.title} text={props.text} directLink={props.directLink}/>
            <CommentBlockContainer projectId={props.id}/>
        </div>
    );
};

export default Project;

