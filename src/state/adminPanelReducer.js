import {addMessage, getChat, getEmptyChats, setAdminToChat, updateMessage} from "../api/api";
import {updateCommentFun, addMessageFun} from './common'

import React from "react";


const SET_CHATS = 'SET_CHATS';
const SET_MY_CHATS = 'SET_MY_CHATS';
const SET_ADMIN = 'SET_ADMIN';
const SET_MESSAGES = 'SET_MESSAGES';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const ADD_MESSAGE = 'ADD_MESSAGE';


let initialState = {
    emptyChats: [],
    myChats: [],
    messages: [],
};

export const addMessageAC = (data) => {return {type: "ADD_MESSAGE", data: data}};
export const setMessages = (data) => {return {type: "SET_MESSAGES", data: data}};
export const setChats = (data) => {return {type: "SET_CHATS", data: data}};
export const setMyChats = (data) => {return {type: "SET_MY_CHATS", data: data}};
export const setAdmin = (id) => {return {type: "SET_ADMIN", id: id}};
export const updateMessageAC = (id, text) => {return {type: "UPDATE_MESSAGE", id: id, text: text}};

export const adminReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CHATS: {
            return {...state, emptyChats: [...action.data]}
        }
        case SET_MY_CHATS: {
            return {...state, myChats: [...action.data]}
        }
        case SET_ADMIN: {
            let newState = {...state};
            let emptyChats = [...state.emptyChats];
            for (let i = 0; i < emptyChats.length; i++){
                if (emptyChats[i].id === action.id){
                    newState.emptyChats.splice(i, 1);
                    return newState
                }
            }
            return state
        }
        case SET_MESSAGES: {
            return {...state, messages: [...action.data.messages]}
        }
        case UPDATE_MESSAGE: {
            return updateCommentFun(state, action)
        }
        case ADD_MESSAGE: {
            return addMessageFun(state, action)
        }
        default:
            return state
    }
};

export const getMessagesThunk = (username) => {
    return async (dispatch) => {
        let data = await getChat(username);
        if (data.keyError === 0){
            dispatch(setMessages(data))
        }
    }
};

export const getEmptyChatsThunk = (adminname) =>{
    return async (dispatch) =>{
        let data = await getEmptyChats(adminname);
        if (data.errorKey !== 0) dispatch(setChats(data.chats))
    }
};
export const getMyChatsThunk = (adminname) =>{
    return async (dispatch) =>{
        let data = await getEmptyChats(adminname);
        if (data.errorKey !== 0) dispatch(setMyChats(data.chats))
    }
};

export const setAdminToChatThunk = (id, adminname) =>{
    return async (dispatch) =>{
        let data = await setAdminToChat(id, adminname);
        if (data.errorKey !== 0) dispatch(setAdmin(id));
        dispatch(getEmptyChatsThunk())
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
        if (data.keyError !== 2){
            dispatch(addMessageAC({
                chat_id: projectId,
                author: author,
                text: text
            }));
        }
    }
};
