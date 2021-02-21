import React from 'react';
import Styles from './projects.module.css'
import Project from './ProjectElement/Project'
import NavLinks from './NavLink/NavLink'
import {NavLink} from "react-router-dom";
import Search from './Search/Search'

const Projects = (props) => {

    let NavLinksItemsThemes = props.state.NavLinksArr.map(el => <NavLinks id={el.id} name={el.name} key={el.id}
                                                                    onClickSetTheme={props.onClickSetTheme}
                                                                    nowType={props.state.nowType}
                                                                    whatChange={'theme'} nowPage={props.state.nowPage}
                                                                          search={props.state.search}/>);

    let NavLinksItemsTypes = props.state.NavLinksArrTypes.map(el => <NavLinks id={el.id} name={el.name} key={el.id}
                                                                    onClickSetTheme={props.onClickSetTheme}
                                                                    nowTheme={props.state.nowTheme}
                                                                    whatChange={'type'} nowPage={props.state.nowPage}
                                                                              search={props.state.search}/>);

    let ProjectsItem = props.state.ProjectsArr.map(el => <Project title={el.title} text={el.text}
                                                                       directLink={el.directLink} key={el.id}
                                                                       id={el.id} img={el.img} name={el.name}/>);
    let buttons = [];
    for (let i = 1; i <= Math.ceil(props.state.projectsCount / 4); i++){
        buttons.push(i);
    }

    return (

        <div className={Styles.projects}>
            <div>
                <Search search={props.state.search} onClickSetSearch={props.onClickSetSearch}
                        nowType={props.state.nowType}
                        nowPage={props.state.nowPage}
                        nowTheme={props.state.nowTheme}/>
            </div>
            <div>
                <NavLinks id={'all'} name={'all'} key={'all'} onClickSetTheme={props.onClickSetTheme}
                          nowType={props.state.nowType}
                          whatChange={'theme'} nowPage={props.state.nowPage} search={props.state.search}/>
                {NavLinksItemsThemes}
            </div>
            <div>
                <NavLinks id={'all'} name={'all'} key={'all'} onClickSetTheme={props.onClickSetTheme}
                          nowTheme={props.state.nowTheme}
                          whatChange={'type'} nowPage={props.state.nowPage} search={props.state.search}/>
                {NavLinksItemsTypes}
            </div>
            {ProjectsItem}
            {buttons.map(el => {
                return <NavLink key={el} to={"/projects/" + props.state.nowTheme + "/" + props.state.nowType + "/" + el}
                                onClick={() => {
                    props.onClickSetPage(el);
                } }>{el}</NavLink>
            })}
        </div>
    )
};

export default Projects;