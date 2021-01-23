import React from 'react';
import Styles from './ProjectPage.module.css'
import ImgBlock from './ImgBlock/ImgBlock'
import ComentBlock from './ComentsBlock/ComentBlock'

const ProjectPage = (props) => {
    return (
        <div className={Styles.page}>
            <ImgBlock state={props.state.thisProject}/>
            <ComentBlock {...props}/>
        </div>
    );
};

export default ProjectPage;