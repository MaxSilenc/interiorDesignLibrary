import {addMessage, getChat, getEmptyChats, setAdminToChat, updateMessage} from "../api/api";

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
    adminMessages: [],
};

export const addMessageAC = (data) => {return {type: "ADD_MESSAGE", data: data}};
export const setMessages = (data) => {return {type: "SET_MESSAGES", data: data}};
export const setChats = (data) => {return {type: "SET_CHATS", data: data}};
export const setMyChats = (data) => {return {type: "SET_MY_CHATS", data: data}};
export const setAdmin = (id, name) => {return {type: "SET_ADMIN", id, name}};
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
            let emptyChats = [...state.emptyChats];
            let myChats = [...state.myChats];
            for (let i = 0; i < emptyChats.length; i++){
                if (emptyChats[i].id === action.id){
                    let newChat = emptyChats[i];
                    newChat.adminname = action.name;
                    myChats.push(newChat);
                    emptyChats.splice(i, 1);
                    return {...state, emptyChats: [...emptyChats], myChats: myChats}
                }
            }

            return state
        }
        case SET_MESSAGES: {
            return {...state, adminMessages: [...action.data.messages]}
        }
        case UPDATE_MESSAGE: {
            let messages = [...state.adminMessages];
            for (let i = 0; i < messages.length; i++){
                if (messages[i].id === action.id){
                    if (action.text === '') messages.splice(i, 1);
                    else messages[i].text = action.text;
                    return {...state, adminMessages: [...messages]}
                }
            }
            return state
        }
        case ADD_MESSAGE: {
            let messages = [...state.adminMessages];
            messages.push({
                id: messages[messages.length - 1].id + 1,
                author: action.data.author,
                chat_id: action.data.chat_id,
                text: action.data.text,
            });
            return {...state, adminMessages: [...messages]};
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
        if (data.errorKey !== 0) dispatch(setAdmin(id, adminname));
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
        if (projectId !== undefined) {
            let data = await addMessage(text, projectId, author);
            if (data.keyError !== 2){
                dispatch(addMessageAC({
                    chat_id: projectId,
                    author: author,
                    text: text
                }));
            }
        }
    }
};
