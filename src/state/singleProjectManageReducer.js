import {updateProject, getCurrProject, getCurrProjectComment, updateComment} from "../api/api";

const SET_THIS_PROJECT = "SET_THIS_PROJECT";
const SET_THIS_COMMENTS = "SET_THIS_COMMENTS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";


let initialState = {
    comments: [],
    thisProject: {},
};

export const setThisProjectCommentActionCreator = (project) => {return {type: "SET_THIS_PROJECT", project: project}};
export const setThisCommentsAC = (comments) => {return {type: "SET_THIS_COMMENTS", comments: comments}};
export const updateCommentAC = (id, text) => {return {type: "UPDATE_COMMENTS", id: id, text: text}};


export const singleProjectManagerReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_THIS_PROJECT: {
            return {...state, thisProject: action.project}
        }
        case SET_THIS_COMMENTS: {
            return {...state, comments: [...action.comments.items]}
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


export const getCurrProjectThunk = (projectId) => {
    return async (dispatch) => {
        let data = await getCurrProject(projectId);
        dispatch(setThisProjectCommentActionCreator(data));
        let commetnData = await getCurrProjectComment(projectId);
        dispatch(setThisCommentsAC(commetnData));
    }
};

export const updateProjectThunk = (projectData) =>{
    return async (dispatch) =>{
        let data = await updateProject(projectData);
    }
};

export const updateCommentThunk = (id, text, projectId) => {
    return async (dispatch) => {
        let data = await updateComment(id, text, projectId);
        dispatch(updateCommentAC(id, text));
    }
};

