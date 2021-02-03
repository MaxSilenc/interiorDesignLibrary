import {getCurrProject, getCurrProjectComment, updateComment} from "../api/api";

const ADD_COMMENT = 'ADD-COMMENT';
const NEW_COMMENT_INPUT = "NEW-COMMENT-INPUT";
const SET_THIS_PROJECT = "SET_THIS_PROJECT";
const SET_THIS_COMMENTS = "SET_THIS_COMMENTS";
const UPDATE_COMMENTS = "UPDATE_COMMENTS";


let initialState = {
    comments: [],
    NewCommentInput: {text: '', author: ''},
    thisProject: {}
};

export const addCommentActionCreator = () => {return {type: "ADD-COMMENT"}};
export const updateNewCommentActionCreator = (text, user) => {return {type: "NEW-COMMENT-INPUT", text: text, author: user}};
export const setThisProjectCommentActionCreator = (project) => {return {type: "SET_THIS_PROJECT", project: project}};
export const setThisCommentsAC = (comments) => {return {type: "SET_THIS_COMMENTS", comments: comments}};
export const updateCommentAC = (id, text) => {return {type: "UPDATE_COMMENTS", id: id, text: text}};

export const commentsFormReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COMMENT: {
            let stateCopy = {...state};
            stateCopy.comments = [...state.comments];
            stateCopy.NewCommentInput = {...state.NewCommentInput};

            let newComment = {
                text: state.NewCommentInput.text,
                author: state.NewCommentInput.author,
            };
            stateCopy.comments.push(newComment);
            stateCopy.NewCommentInput.text = '';
            stateCopy.NewCommentInput.author = '';
            return stateCopy;
        }
        case NEW_COMMENT_INPUT: {
            let stateCopy = {...state};
            stateCopy.NewCommentInput = {...state.NewCommentInput};
            stateCopy.NewCommentInput.author = action.author;
            stateCopy.NewCommentInput.text = action.text;
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
            let comments = {...state.comments};
            for (let i = 0; i < comments.length; i++){
                if (comments[i].id === action.id){
                    comments[i].text = action.text;
                    return newState
                }
            }
            return state
        }
        default:
            return state
    }
};


export const getCurrProjectThunk = (projectId) => {
    return (dispatch) => {
        getCurrProject(projectId).then(data => {
            dispatch(setThisProjectCommentActionCreator(data));
        });
        getCurrProjectComment(projectId).then(data => {
            dispatch(setThisCommentsAC(data));
        });
    }
};

export const updateCommentThunk = (id, text, projectId) => {
    return (dispatch) => {
        updateComment(id, text, projectId).then(data => {
            dispatch(updateCommentAC(id, text));
        });
    }
};