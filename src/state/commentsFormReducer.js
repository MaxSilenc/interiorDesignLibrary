import {getCurrProject, getCurrProjectComment, updateComment, addComment, like} from "../api/api";

const ADD_COMMENT = 'ADD-COMMENT';
const SET_THIS_PROJECT = "SET_THIS_PROJECT";
const SET_THIS_COMMENTS = "SET_THIS_COMMENTS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";
const LIKE_THIS = 'LIKE_THIS';

let initialState = {
    comments: [],
    thisProject: {},
    like: {}
};

export const addCommentActionCreator = (comment) => {return {type: "ADD-COMMENT", comment: comment}};
export const setThisProjectCommentActionCreator = (project) => {return {type: "SET_THIS_PROJECT", project: project}};
export const setThisCommentsAC = (comments) => {return {type: "SET_THIS_COMMENTS", comments: comments}};
export const updateCommentAC = (id, text) => {return {type: "UPDATE_COMMENTS", id: id, text: text}};
export const likeAC = (like, likeCount) => {return {type: "LIKE_THIS", like: like, likeCount: likeCount}};

export const commentsFormReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COMMENT: {
            let stateCopy = {...state};
            stateCopy.comments = [...state.comments];

            let newComment = {...action.comment};
            stateCopy.comments.push(newComment);
            return stateCopy;
        }
        case SET_THIS_PROJECT: {
            return {...state, thisProject: action.project}
        }
        case SET_THIS_COMMENTS: {
            return {...state, comments: [...action.comments.items]}
        }
        case UPDATE_COMMENTS: {
            let newState = {...state};
            let comments = [...state.comments];
            for (let i = 0; i < comments.length; i++){
                if (comments[i].id === action.id){
                    if (action.text === '') newState.comments.splice(i, 1);
                    else comments[i].text = action.text;
                    return newState
                }
            }
            return state
        }
        case LIKE_THIS:{
            let like = {
                like: action.like,
                likeCount: action.likeCount
            };
            return {...state, like: like}
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

export const updateCommentThunk = (id, text, projectId) => {
    return async (dispatch) => {
        let data = await updateComment(id, text, projectId);
        dispatch(updateCommentAC(id, text));
    }
};

export const addCommentThunk = (text, projectId, author) => {
    return async (dispatch) => {
        let data = await addComment(text, projectId, author);
        dispatch(addCommentActionCreator({
            project_id: projectId,
            author: author,
            text: text
        }));
        let commetnData = await getCurrProjectComment(projectId);
        dispatch(setThisCommentsAC(commetnData));
    }
};

export const likeThunk = (project_id, author) => {
    return async (dispatch) => {
        let data = await like(project_id, author);
        dispatch(likeAC(data.like, data.likesCount))
    };
};