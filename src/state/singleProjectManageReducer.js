import {updateProject, getCurrProject, getCurrProjectComment, updateComment} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_THIS_PROJECT = "SET_THIS_PROJECT";
const SET_THIS_COMMENTS = "SET_THIS_COMMENTS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";
const SUCCESS_MESS = "SUCCESS_MESS";


let initialState = {
    comments: [],
    thisProject: {},
    count: null,
    page: 1,
};

export const setThisProjectCommentActionCreator = (project) => {return {type: "SET_THIS_PROJECT", project: project}};
export const setThisCommentsAC = (comments) => {return {type: "SET_THIS_COMMENTS", comments: comments}};
export const updateCommentAC = (id, text) => {return {type: "UPDATE_COMMENTS", id: id, text: text}};


export const singleProjectManagerReducer = (state = initialState, action) => {
    switch (action.type){
        case SUCCESS_MESS:{
            return {...state, SuccessMess: action.message}
        }
        case SET_THIS_PROJECT: {
            return {...state, thisProject: action.project}
        }
        case SET_THIS_COMMENTS: {
            return {...state, comments: [...action.comments.items], count: action.comments.count}
        }
        case UPDATE_COMMENTS: {
            let comments = [...state.comments];
            for (let i = 0; i < comments.length; i++){
                if (comments[i].id === action.id){
                    if (action.text === '') comments.splice(i, 1);
                    else comments[i].text = action.text;
                    return {...state, comments: comments}
                }
            }
            return state
        }
        default:
            return state
    }
};

export const getCommentsThunk = (projectId, page) => {
    return async (dispatch) =>{
        let data = await getCurrProjectComment(projectId, page);
        dispatch(setThisCommentsAC(data));
    }
};


export const getCurrProjectThunk = (projectId, page) => {
    return async (dispatch) => {
        let data = await getCurrProject(projectId, page);
        dispatch(setThisProjectCommentActionCreator(data));
        dispatch(getCommentsThunk(projectId, page));
    }
};

export const updateProjectThunk = (projectData) =>{
    return async (dispatch) =>{
        let data = await updateProject(projectData);
        if (data.keyError === 0){
        }
        if (data.keyError === 1){
            let action = stopSubmit('updateProjects', {headline_name: data.message});
            dispatch(action)
        }
        if (data.keyError === 2){
            let action = stopSubmit('updateProjects', {theme: data.message});
            dispatch(action)
        }
        if (data.keyError === 3){
            let action = stopSubmit('updateProjects', {type: data.message});
            dispatch(action)
        }
        if (data.keyError === 4){
            let action = stopSubmit('updateProjects', {name: data.message});
            dispatch(action)
        }
        if (data.keyError === 5){
            let action = stopSubmit('updateProjects', {username: data.message});
            dispatch(action)
        }
    }
};

export const updateCommentThunk = (id, text, projectId) => {
    return async (dispatch) => {
        let data = await updateComment(id, text, projectId);
        dispatch(updateCommentAC(id, text));
    }
};

