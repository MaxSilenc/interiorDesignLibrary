import React from 'react';
import Styles from './projects.module.css'
import Project from './ProjectElement/Project'
import NavLinks from './NavLink/NavLink'


const Projects = (props) => {

    let NavLinksItems = props.state.NavLinksArr.map(el => <NavLinks id={el.id} name={el.name} key={el.id}/>);
    let ProjectsItem = props.state.ProjectsArr.map(el => <Project title={el.title} text={el.text}
                                                                       directLink={el.directLink} key={el.id}
                                                                       id={el.id} img={el.img} name={el.name}/>);
    let buttons = [];
    for (let i = 1; i <= Math.ceil(props.state.projectsCount / 4); i++){
        buttons.push(i);
    }

    return (

        <div className={Styles.projects}>
            {NavLinksItems}
            {ProjectsItem}
            {buttons.map(el => {
                return <button key={el} onClick={(e) => {
                    props.onClickSetPage(el, props);
                } }>{el}</button>
            })}
        </div>
    )
};

export default Projects;