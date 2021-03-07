import {getProjects, getThemes, addProject, addThemeOrType, updateThemeOrType} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_PROJECTS = "SET_PROJECTS";
const SET_THEMES = "SET_THEMES";
const ADD_PROJECT = "ADD_PROJECT";
const SET_THEME_OR_TYPE = "SET_THEME_OR_TYPE";
const UPDATE_THEME_OR_TYPE = "UPDATE_THEME_OR_TYPE";
const DELETE_THEME_OR_TYPE = "DELETE_THEME_OR_TYPE";



let initialState = {
    ProjectsArr: [],
    count: null,
    themes: [],
    nowPage: 1,
    search: '',
    types: []
};

export const setProjectsActionCreator = (ProjectsArr, count, page, search) => {return {type: "SET_PROJECTS", ProjectsArr, count, page, search}};
export const addProjectActionCreator = (project) => {return {type: "ADD_PROJECT", project}};
export const themeOrTypeAC = (whatIsThat, item) => {return {type: "SET_THEME_OR_TYPE", whatIsThat: whatIsThat, item: item}};
export const DeleteThemeOrTypeAC = (whatIsThat, id) => {return {type: "DELETE_THEME_OR_TYPE", whatIsThat: whatIsThat, id: id}};
export const updateThemeOrTypeAC = (whatIsThat, item, id) => {return {type: "UPDATE_THEME_OR_TYPE", whatIsThat: whatIsThat,
    item: item, id: id}};
export const setThemesAC = (themes, types) => {return {type: "SET_THEMES",
    themes: themes, types: types}};

export const projectsManagerReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROJECTS: {
            return {...state, ProjectsArr: [...action.ProjectsArr], count: action.count, nowPage: action.page, search: action.search}
        }
        case SET_THEMES: {
            return {...state, themes: action.themes, types: action.types}
        }
        case ADD_PROJECT: {
            let newArr = [...state.ProjectsArr];
            newArr.push(action.project);
            return {...state, ProjectsArr: newArr}
        }
        case SET_THEME_OR_TYPE: {
            if (action.whatIsThat === 'type') {
                let newTypes = [...state.types];
                newTypes.push(action.item);
                return {...state, types: newTypes}
            }
            if (action.whatIsThat === 'theme') {
                let newThemes = [...state.themes];
                newThemes.push(action.item);
                return {...state, themes: newThemes}
            }
        }
        case UPDATE_THEME_OR_TYPE:{
            if (action.whatIsThat === 'type') {
                let newTypes = [...state.types];
                for (let item in newTypes){
                    if (item.id === action.id){
                        item.name = action.item.name;
                    }
                }
                return {...state, types: newTypes}
            }
            if (action.whatIsThat === 'theme') {
                let newThemes = [...state.themes];
                for (let item in newThemes){
                    if (item.id === action.id){
                        item.name = action.item.name;
                    }
                }
                return {...state, themes: newThemes}
            }
        }
        case DELETE_THEME_OR_TYPE:{
            if (action.whatIsThat === 'type') {
                let types = [...state.types];
                for (let i = 0; i < types.length; i++){
                    if (types[i].id === action.id){
                        types.splice(i, 1);
                        return {...state, types: types}
                    }
                }
                return state
            }
            if (action.whatIsThat === 'theme') {
                let themes = [...state.themes];
                for (let i = 0; i < themes.length; i++){
                    if (themes[i].id === action.id){
                        themes.splice(i, 1);
                        return {...state, themes: themes}
                    }
                }
                return state
            }
        }
        default:
            return state;
    }
};


export const getProjectsThunk = (nowPage, theme, type, search='') => {
    return async (dispatch) => {
        let data = await getProjects(nowPage, theme, type, search);
        dispatch(setProjectsActionCreator(data.items, data.count, nowPage, search));
        let themesData = await getThemes();
        dispatch(setThemesAC(themesData.themes, themesData.types))
    }
};

export const addProjectThunk = (data) => {
    return async (dispatch) => {
        let themesData = await addProject(data);
        if (themesData.keyError === 0){
            dispatch(addProjectActionCreator(themesData.project))
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
        if (themesData.keyError === 4){
            let action = stopSubmit('addProjectForm', {name: themesData.message});
            dispatch(action)
        }
    }
};

export const setThemesOrType = (themeOrType, name) =>{
    return async (dispatch) =>{
        let data = await addThemeOrType(themeOrType, name);
        if (data.keyError === 0){
            dispatch(themeOrTypeAC(data.message, data.new))
        }
        if (data.keyError === 1){
            let action = stopSubmit('Types', {name: data.message});
            dispatch(action)
        }
        if (data.keyError === 2){
            let action = stopSubmit('Themes', {name: data.message});
            dispatch(action)
        }
    }
};

export const upadteThemesOrTypeThunk = (themeOrType, id, newName) =>{
    return async (dispatch) =>{
        let data = await updateThemeOrType(themeOrType, id, newName);
        if (data.keyError === 0){
            dispatch(updateThemeOrTypeAC(data.message, data.new, id))
        }
        if (data.keyError === 1){
            dispatch(DeleteThemeOrTypeAC(data.message, id))
        }
    }
};