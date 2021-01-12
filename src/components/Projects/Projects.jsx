import React from 'react';
import Styles from './projects.module.css'
import Project from './Project/Project'
import NavLinks from './NavLink/NavLink'


const Projects = (props) => {

    let NavLinksItems = props.NavLinksArr.map(el => <NavLinks id={el.id} name={el.name}/>);
    let ProjectsItem = props.ProjectsArr.map(el => <Project title={el.title} text={el.text}/>);

    return (
        <div className={Styles.projects}>
            {NavLinksItems}
            {ProjectsItem}
        </div>
    )
}

export default Projects;