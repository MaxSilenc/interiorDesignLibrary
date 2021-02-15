import {currUser, login, registrationApi} from "../api/api";
import {stopSubmit} from "redux-form";
import React from "react";

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const setUserActionCreator = (userId, email, login) => {return {type: "SET_USER", data: {userId, email, login}}};
export const logoutAC = () => {return {type: "LOGOUT"}};

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

        default:
            return state
    }
};

export const getCurrUserThunk = () =>{
    return async (dispatch) =>{
        let data = await currUser();
        if (data.errorKey !== 0) dispatch(setUserActionCreator(data.id, data.email, data.login))
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

