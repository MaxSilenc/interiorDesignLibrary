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
        axios.get("http://127.0.0.1:8000/reactTest?page=" + this.props.state.nowPage).then(respons => {
            this.props.setCount(respons.data.count);
            this.props.setProjects(respons.data.items);
        });
    }

    onClickSetPage(el){
        this.props.setPage(el);
        axios.get("http://127.0.0.1:8000/reactTest?page=" + el).then(respons => {
            this.props.setCount(respons.data.count);
            this.props.setProjects(respons.data.items);
        });
    }

    render() {
        let NavLinksItems = this.props.state.NavLinksArr.map(el => <NavLinks id={el.id} name={el.name} key={el.id}/>);
        let ProjectsItem = this.props.state.ProjectsArr.map(el => <Project title={el.title} text={el.text}
                                                                      directLink={el.directLink} key={el.id}
                                                                      id={el.id}/>);
        let buttons = [];
        for (let i = 1; i <= Math.ceil(this.props.state.projectsCount / 4); i++){
            buttons.push(i);
        }
        let PageButtons = buttons.map(el => <button key={el} onClick={() => this.onClickSetPage(el) }>{el}</button>);

        return (
            <div className={Styles.projects}>
                {NavLinksItems}
                {ProjectsItem}
                {PageButtons}
            </div>
        )
    }
}

export default Projects;