import React from 'react';
import SingleProject from './SingleProject/SingleProject'
import Styles from './ProjectsInWork.module.css'

const ProjectsInWork = (props) =>{

    let projects = props.state.map(el => <SingleProject key={'project' + el.id} title={el.title}
                                                        img={el.img} img2={el.img2} img3={el.img3} link={el.name}
                                                        id={el.id}/>);

    return (
        <div className={Styles.main}>
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>My Projects</h2>
            </div>
            <div className={Styles.projects}>
                {projects}
            </div>
        </div>
    )
};

export default ProjectsInWork;