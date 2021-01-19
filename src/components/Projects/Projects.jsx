import React from 'react';
import Styles from './projects.module.css'
import Project from './Project/Project'
import NavLinks from './NavLink/NavLink'


const Projects = (props) => {

    let NavLinksItems = props.state.NavLinksArr.map(el => <NavLinks id={el.id} name={el.name} key={el.id}/>);
    let ProjectsItem = props.state.ProjectsArr.map(el => <Project title={el.title} text={el.text} directLink={el.directLink} key={el.id} id={el.id}/>);

    return (
        <div className={Styles.projects}>
            {NavLinksItems}
            {ProjectsItem}
        </div>
    )
};

export default Projects;