import {getProjects, getThemes} from "../api/api";

const ADD_PROJECT = 'ADD-PROJECT';
const NEW_PROJECT_INPUT = "NEW-PROJECT-INPUT";
const SET_PROJECTS = "SET_PROJECTS";
const SET_PROJECTS_COUNT = "SET_PROJECTS_COUNT";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_THEMES = "SET_THEMES";
const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";


let initialState = {
    NavLinksArr: [],
    NavLinksArrTypes: [],
    ProjectsArr: [],
    NewProjectInput: {title: "", text: "", directLink: "",},
    nowPage: 1,
    projectsCount: 0,
    nowTheme: 'all',
    nowType: 'all',
    search: '',
    isFetching: false
};

export const setProjectsActionCreator = (ProjectsArr) => {return {type: "SET_PROJECTS", ProjectsArr}};
export const setPage = (page) => {return {type: "SET_PAGE_NUMBER", page: page}};
export const setProjectsCountActionCreator = (count) => {return {type: "SET_PROJECTS_COUNT", count: count}};
export const setIsFetchingActionCreator = (bool) => {return {type: "SET_IS_FETCHING", bool: bool}};
export const setThemesAC = (themes, nowTheme, types, nowType) => {return {type: "SET_THEMES",
    themes: themes, nowTheme: nowTheme,
    types: types, nowType: nowType}};
export const searchAC = (query) => {return {type: "SET_SEARCH_QUERY", query}};


export const projectsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PROJECT: {
            let stateCopy = {...state};
            stateCopy.ProjectsArr = [...state.ProjectsArr];
            stateCopy.NewProjectInput = {...state.NewProjectInput};

            let newProject = {
                title: state.NewProjectInput.title,
                text: state.NewProjectInput.text,
                directLink: state.NewProjectInput.directLink,
            };
            console.log(newProject);
            stateCopy.ProjectsArr.push(newProject);
            stateCopy.NewProjectInput.text = '';
            stateCopy.NewProjectInput.title = '';
            stateCopy.NewProjectInput.directLink = '';
            return stateCopy;
        }
        case NEW_PROJECT_INPUT: {
            let stateCopy = {...state};
            stateCopy.NewProjectInput = {...state.NewProjectInput};
            console.log(action);
            stateCopy.NewProjectInput.title = action.title;
            stateCopy.NewProjectInput.text = action.text;
            stateCopy.NewProjectInput.directLink = action.directLink;
            return stateCopy;
        }
        case SET_PROJECTS: {
            return {...state, ProjectsArr: [...action.ProjectsArr]}
        }
        case SET_PROJECTS_COUNT: {
            return {...state, projectsCount: action.count}
        }
        case SET_PAGE_NUMBER: {
            return {...state, nowPage: action.page}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.bool}
        }
        case SET_THEMES: {
            return {...state, NavLinksArr: action.themes, nowTheme: action.nowTheme, NavLinksArrTypes: action.types, nowType: action.nowType}
        }
        case SET_SEARCH_QUERY: {
            return {...state, search: action.query}
        }
        default:
            return state;
    }
};


export const getProjectsThunk = (nowPage, theme, type, search='') => {
    return async (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));
        let data = await getProjects(nowPage, theme, type, search);
        dispatch(setIsFetchingActionCreator(false));
        dispatch(setProjectsCountActionCreator(data.count));
        dispatch(setProjectsActionCreator(data.items));
        dispatch(setPage(nowPage));
        dispatch(searchAC(search));
        let themesData = await getThemes();
        dispatch(setThemesAC(themesData.themes, theme, themesData.types, type))
    }
};