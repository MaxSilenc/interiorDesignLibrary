import {getProjects, getThemes} from "../api/api";

const SET_PROJECTS = "SET_PROJECTS";
const SET_DIRECTION = "SET_DIRECTION";

let initialState = {
    slideArr: [
        {},
        {},
        {},
    ],
    direction: []
};

export const setProjectsActionCreator = (ProjectsArr) => {return {type: "SET_PROJECTS", ProjectsArr}};
export const setThemesAC = (direction) => {return {type: "SET_DIRECTION", direction: direction}};

export const sliderSectionPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:{
            return {...state, slideArr: [...action.ProjectsArr]}
        }
        case SET_DIRECTION: {
            return {...state, direction: action.direction.slice(0,3)}
        }
        default:
            return state
    }
};

export const getProjectsThunk = () => {
    return async (dispatch) => {
        let data = await getProjects(1, 'all', 'all', '');
        dispatch(setProjectsActionCreator(data.items));
        let themesData = await getThemes();
        dispatch(setThemesAC(themesData.themes))
    }
};
