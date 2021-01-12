import React from 'react';
import Styles from './projects.module.css'
import Project from './Project/Project'
import NavLinks from './NavLink/NavLink'


const Projects = () => {
    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.';

    return (
        <div className={Styles.projects}>
            <NavLinks id='1' name='theme 1'/>
            <NavLinks id='2' name='theme 2'/>
            <NavLinks id='3' name='theme 3'/>
            <NavLinks id='4' name='theme 4'/>

            <Project title='title1' text={text}/>
            <Project title='title1' text={text}/>
            <Project title='title1' text={text}/>
        </div>
    )
}

export default Projects;