import {currUser, login, registrationApi, socialRegApi, changeCred} from "../api/api";
import {stopSubmit} from "redux-form";
import React from "react";

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';
const SET_USER_CRED = 'SET_USER_CRED';



let initialState = {
    userId: null,
    email: null,
    login: null,
    name: null,
    lastName: null,
    isAuth: false
};

export const setUserActionCreator = (userId, email, login, name, lastName) => {return {type: "SET_USER", data: {userId, email, login, name, lastName}}};
export const logoutAC = () => {return {type: "LOGOUT"}};
export const setUserCred = (data) => {return {type: "SET_USER_CRED", data: data}};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER: {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }
        case LOGOUT: {
            localStorage.removeItem("token");
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false
            }
        }
        case SET_USER_CRED: {
            let newCred = {...state};
            if (action.data.login !== '') newCred.login = action.data.login;
            if (action.data.email !== '') newCred.email = action.data.email;
            if (action.data.name !== '') newCred.name = action.data.name;
            if (action.data.lastName !== '') newCred.lastName = action.data.lastName;
            return newCred
        }
        default:
            return state
    }
};

export const getCurrUserThunk = () =>{
    return async (dispatch) =>{
        let data = await currUser();
        if (data.errorKey !== 0) dispatch(setUserActionCreator(data.userId, data.email, data.login, data.name, data.lastName))
    }
};

export const loginThunk = (data) =>{
    return async (dispatch) =>{
        let loginData = await login(data);
        if (loginData.keyError === 0){
            localStorage.setItem("token", loginData.token);
            dispatch(getCurrUserThunk())
        }
        else {
            let action = stopSubmit('login', {login: ' ', password: loginData.message});
            dispatch(action)
        }
    }
};


export const registrationThunk = (data) =>{
    return async (dispatch) => {
        let regData = await registrationApi(data);
        if (regData.keyError === 0){
            dispatch(loginThunk({login: data.login, password: data.password}));
            return {error: regData.keyError};
        }
        else if (regData.keyError === 1){
            let action = stopSubmit('registrationForm', {login: regData.messages});
            dispatch(action)
        }
        else if (regData.keyError === 2){
            let action = stopSubmit('registrationForm', {password: " " , passwordRep: regData.messages});
            dispatch(action)
        }
        else if (regData.keyError === 3){
            let action = stopSubmit('registrationForm', {email: regData.messages});
            dispatch(action)
        }
    }
};

export const socialRegThunk = (email) =>{
    return async (dispatch) => {
        let data = await socialRegApi(email);
        if (data.keyError === 0){
            localStorage.setItem("token", data.token);
            dispatch(getCurrUserThunk())
        }
    }
};

export const changeCredThunk = (data, id) =>{
    return async (dispatch) => {
        let changeData = await changeCred(data, id);
        if (changeData.keyError === 0){
            dispatch(setUserCred(data))
        }
        if (changeData.keyError === 1){
            let action = stopSubmit('ChangeGred', {login: ' ', email: ' ', name: ' ', lastName: changeData.messages});
            dispatch(action)
        }
        if (changeData.keyError === 2){
            let action = stopSubmit('ChangeGred', {login: changeData.messages});
            dispatch(action)
        }
        if (changeData.keyError === 3){
            let action = stopSubmit('ChangeGred', {email: changeData.messages});
            dispatch(action)
        }
    }
};

