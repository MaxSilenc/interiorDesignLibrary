import React from 'react';
import Styles from './ProjectPage.module.css'
import ImgBlock from './ImgBlock/ImgBlock'
import ComentBlock from './ComentsBlock/ComentBlock'
import Like from './Like/Like'

const ProjectPage = (props) => {
    return (
        <div className={Styles.page}>
            <ImgBlock state={props.state.thisProject}/>
            <Like likes={props.state.like} user={props.user} setLike={props.setLike} project_id={props.state.thisProject.id}/>
            <ComentBlock comments={props.state.comments} updateComment={props.updateComment} user={props.user} addComment={props.addComment} thisProject={props.state.thisProject.id}/>
        </div>
    );
};

export default ProjectPage;