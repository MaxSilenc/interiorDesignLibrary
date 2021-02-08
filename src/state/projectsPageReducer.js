import {getProjects} from "../api/api";

const ADD_PROJECT = 'ADD-PROJECT';
const NEW_PROJECT_INPUT = "NEW-PROJECT-INPUT";
const SET_PROJECTS = "SET_PROJECTS";
const SET_PROJECTS_COUNT = "SET_PROJECTS_COUNT";
const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
const SET_IS_FETCHING = "SET_IS_FETCHING";

let initialState = {
    NavLinksArr: [
        {id: '1', name: 'theme 1'},
        {id: '2', name: 'theme 2'},
        {id: '3', name: 'theme 3'},
        {id: '4', name: 'theme 4'}
    ],
    ProjectsArr: [],
    NewProjectInput: {title: "", text: "", directLink: "",},
    nowPage: 1,
    projectsCount: 0,
    isFetching: false
};

export const addProjectActionCreator = () => {return {type: "ADD-PROJECT"}};
export const updateNewProjectActionCreator = (text, title, directLink) => {
    return {type: "NEW-PROJECT-INPUT", text: text, title: title, directLink: directLink}};
export const setProjectsActionCreator = (ProjectsArr) => {return {type: "SET_PROJECTS", ProjectsArr}};
export const setProjectsCountActionCreator = (count) => {return {type: "SET_PROJECTS_COUNT", count: count}};
export const setPageNumberActionCreator = (page) => {return {type: "SET_PAGE_NUMBER", page: page}};
export const setIsFetchingActionCreator = (bool) => {return {type: "SET_IS_FETCHING", bool: bool}};


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
        default:
            return state;
    }
};


export const getProjectsThunk = (nowPage) => {
    return async (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));
        let data = await getProjects(nowPage);
        dispatch(setIsFetchingActionCreator(false));
        dispatch(setProjectsCountActionCreator(data.count));
        dispatch(setProjectsActionCreator(data.items));
    }
};