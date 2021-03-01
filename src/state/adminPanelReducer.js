import {getEmptyChats, setAdminToChat} from "../api/api";

import React from "react";

const SET_CHATS = 'SET_CHATS';
const SET_ADMIN = 'SET_ADMIN';




let initialState = {
    emptyChats: []
};



export const setChats = (data) => {return {type: "SET_CHATS", data: data}};
export const setAdmin = (id) => {return {type: "SET_ADMIN", id: id}};

export const adminReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CHATS: {
            return {...state, emptyChats: [...action.data]}
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
        default:
            return state
    }
};

export const getEmptyChatsThunk = () =>{
    return async (dispatch) =>{
        let data = await getEmptyChats();
        if (data.errorKey !== 0) dispatch(setChats(data.chats))
    }
};

export const setAdminToChatThunk = (id, adminname) =>{
    return async (dispatch) =>{
        let data = await setAdminToChat(id, adminname);
        if (data.errorKey !== 0) dispatch(setAdmin(id));
        dispatch(getEmptyChatsThunk())
    }
};


