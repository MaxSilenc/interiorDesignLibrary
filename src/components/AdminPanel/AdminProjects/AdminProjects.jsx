import React from 'react'
import ProjectsList from './ProjectsList/ProjectsList'
import ProjectsFrom from './ProjectsForm/ProjectsForm'
import Themes from './ThemesOrTypes/Forms/Themes'
import Types from './ThemesOrTypes/Forms/Types'
import ThemesList from './ThemesOrTypes/Lsits/ThemesList'
import TypesList from './ThemesOrTypes/Lsits/TypesList'

const AdminProjects = props =>{
    return (
        <div>
            <h1>AdminProjects</h1>
            <h1>padding</h1>
            <ProjectsList projects={props.projects} count={props.count} onClickSetPage={props.onClickSetPage}
                          search={props.search} page={props.page} onClickSetSearch={props.onClickSetSearch}/>
            <ThemesList themes={props.themes} updateTheme={props.updateThemesOrType}/>
            <TypesList types={props.types} updateType={props.updateThemesOrType}/>
            <ProjectsFrom addProject={props.addProject}/>
            <Themes addTheme={props.addThemesOrType}/>
            <Types  addType={props.addThemesOrType}/>
        </div>
    )
};

export default AdminProjects;