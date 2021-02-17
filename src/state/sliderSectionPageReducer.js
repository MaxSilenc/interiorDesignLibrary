import {getProjects} from "../api/api";

const SET_PROJECTS = "SET_PROJECTS";


let initialState = {
    slideArr: [
        {},
        {},
        {},
    ]
};

export const setProjectsActionCreator = (ProjectsArr) => {return {type: "SET_PROJECTS", ProjectsArr}};

export const sliderSectionPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:{
            return {...state, slideArr: [...action.ProjectsArr]}
        }
        default:
            return state
    }
};

export const getProjectsThunk = () => {
    return async (dispatch) => {
        let data = await getProjects(1, 'all', 'all');
        dispatch(setProjectsActionCreator(data.items));
    }
};
