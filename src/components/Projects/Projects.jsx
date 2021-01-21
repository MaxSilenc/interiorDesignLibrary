import React from 'react';
import Styles from './projects.module.css'
import Project from './ProjectElement/Project'
import NavLinks from './NavLink/NavLink'
import * as axios from "axios";


class Projects extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/reactTest").then(respons => {
            debugger;
            this.props.setProjects(respons.data.items)
        });
    }

    render() {
        let NavLinksItems = this.props.state.NavLinksArr.map(el => <NavLinks id={el.id} name={el.name} key={el.id}/>);
        let ProjectsItem = this.props.state.ProjectsArr.map(el => <Project title={el.title} text={el.text}
                                                                      directLink={el.directLink} key={el.id}
                                                                      id={el.id}/>);
        return (
            <div className={Styles.projects}>
                {NavLinksItems}
                {ProjectsItem}
            </div>
        )
    }
}

export default Projects;