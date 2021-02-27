import {getChat, updateMessage, addMessage, getProjectsInWork} from "../api/api";

const SET_CHAT = 'SET_CHAT';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';
const SET_PROJECTS_IN_WORK = 'SET_PROJECTS_IN_WORK';

let initialState = {
    messages: [],
    chat: {},
    projects: []
};

export const setChat = (data) => {return {type: "SET_CHAT", data: data}};
export const updateMessageAC = (id, text) => {return {type: "UPDATE_MESSAGE", id: id, text: text}};
export const addMessageAC = (data) => {return {type: "ADD_MESSAGE", data: data}};
export const setProjectsAC = (data) => {return {type: "SET_PROJECTS_IN_WORK", data: data}};

export const PersonalAreaReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CHAT: {
            return {...state, messages: [...action.data.messages], chat: {...action.data.chat}}
        }
        case UPDATE_MESSAGE: {
            let newState = {...state};
            let messages = [...state.messages];
            for (let i = 0; i < messages.length; i++){
                if (messages[i].id === action.id){
                    if (action.text === '') newState.messages.splice(i, 1);
                    else messages[i].text = action.text;
                    return newState
                }
            }
            return state
        }
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];

            let newComment = {...action.data};
            stateCopy.messages.push(newComment);
            return stateCopy;
        }
        case SET_PROJECTS_IN_WORK: {
            return {...state, projects: [...action.data]}
        }
        default:
            return state
    }
};


export const getChatThunk = (username) => {
    return async (dispatch) => {
        let data = await getChat(username);
        if (data.keyError === 0){
            dispatch(setChat(data))
        }
    }
};

export const updateMessageThunk = (id, text, chatId) => {
    return async (dispatch) => {
        let data = await updateMessage(id, text, chatId);
        dispatch(updateMessageAC(id, text));
    }
};

export const addMessageThunk = (text, projectId, author) => {
    return async (dispatch) => {
        let data = await addMessage(text, projectId, author);
        dispatch(addMessageAC({
            chat_id: projectId,
            author: author,
            text: text
        }));
    }
};

export const getProjectsInWorkThunk = (user_id) =>{
    return async (dispatch) =>{
        let data = await getProjectsInWork(user_id);
        if (data.keyError === 0){
            dispatch(setProjectsAC(data.projects))
        }
    }
};