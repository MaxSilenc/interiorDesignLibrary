import {getProjects, getThemes, addProject} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_PROJECTS = "SET_PROJECTS";
const SET_THEMES = "SET_THEMES";



let initialState = {
    ProjectsArr: [],
    themes: [],
    types: []
};

export const setProjectsActionCreator = (ProjectsArr) => {return {type: "SET_PROJECTS", ProjectsArr}};
export const setThemesAC = (themes, types) => {return {type: "SET_THEMES",
    themes: themes, types: types}};

export const projectsManagerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROJECTS: {
            return {...state, ProjectsArr: [...action.ProjectsArr]}
        }
        case SET_THEMES: {
            return {...state, themes: action.themes, types: action.types}
        }
        default:
            return state;
    }
};


export const getProjectsThunk = (nowPage, theme, type, search='') => {
    return async (dispatch) => {
        let data = await getProjects(nowPage, theme, type, search);
        dispatch(setProjectsActionCreator(data.items));
        let themesData = await getThemes();
        dispatch(setThemesAC(themesData.themes, themesData.types))
    }
};

export const addProjectThunk = (data) => {
    return async (dispatch) => {
        let themesData = await addProject(data);
        if (themesData.keyError === 0){
            dispatch(getProjectsThunk())
        }
        if (themesData.keyError === 1){
            let action = stopSubmit('addProjectForm', {headline_name: themesData.message});
            dispatch(action)
        }
        if (themesData.keyError === 2){
            let action = stopSubmit('addProjectForm', {theme: themesData.message});
            dispatch(action)
        }
        if (themesData.keyError === 3){
            let action = stopSubmit('addProjectForm', {type: themesData.message});
            dispatch(action)
        }
    }
};