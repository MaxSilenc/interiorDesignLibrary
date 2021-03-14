import React from 'react'
import ProjectsList from './ProjectsList/ProjectsList'
import ProjectsFrom from './ProjectsForm/ProjectsForm'
import Themes from './ThemesOrTypes/Forms/Themes'
import Types from './ThemesOrTypes/Forms/Types'
import ThemesList from './ThemesOrTypes/Lsits/ThemesList'
import TypesList from './ThemesOrTypes/Lsits/TypesList'
import Styles from './AdminProjects.module.css'

const AdminProjects = props =>{
    return (
        <div className={Styles.main}>
            <ProjectsFrom addProject={props.addProject}/>
            <div className={Styles.form}>
                <div className={Styles.block1}>
                    <Themes addTheme={props.addThemesOrType}/>
                </div>
                <div className={Styles.block2}>
                    <Types  addType={props.addThemesOrType}/>
                </div>
            </div>
            <ProjectsList projects={props.projects} count={props.count} onClickSetPage={props.onClickSetPage}
                          search={props.search} page={props.nowPage} onClickSetSearch={props.onClickSetSearch} deleteProject={props.deleteProject}/>
            <ThemesList themes={props.themes} updateTheme={props.updateThemesOrType}/>
            <TypesList types={props.types} updateType={props.updateThemesOrType}/>
        </div>
    )
};

export default AdminProjects;