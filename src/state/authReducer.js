import {currUser, login} from "../api/api";
import {stopSubmit} from "redux-form";

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