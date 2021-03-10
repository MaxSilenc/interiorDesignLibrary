import {getUsers, changeCred, registrationApi} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USERS = "SET_USERS";
const DELETE_USER = "DELETE_USER";
const SET_SINGLE_USER = "SET_SINGLE_USER";


let initialState = {
    users: []
};

export const setUsersActionCreator = (Arr) => {return {type: "SET_USERS", Arr}};
export const deleteUsersActionCreator = (id) => {return {type: "DELETE_USER", id}};
export const setSingleUserActionCreator = (data) => {return {type: "SET_SINGLE_USER",data}};

export const usersPageAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:{
            return {...state, users: [...action.Arr]}
        }
        case DELETE_USER: {
            let users = [...state.users];
            for (let i = 0; i < users.length; i++){
                if (users[i].userId === action.id){
                    users.splice(i, 1);
                    return {...state, users: users}
                }
            }
            return state
        }
        case SET_SINGLE_USER:{
            let user = {
                email: action.data.email,
                lastName: action.data.lastName,
                login: action.data.login,
                name: action.data.name,
                status: true,
                userId: state.users[state.users.length - 1].userId + 1,
            };
            let newUsersList = [...state.users];
            newUsersList.push(user);
            return {...state, users: newUsersList}
        }
        default:
            return state
    }
};

export const deleteUserThunk = (id) =>{
    return async (dispatch) => {
        let changeData = await changeCred({
            login: '',
            email: '',
            name: '',
            lastName: '',
        }, id, '1', 'delete');
        dispatch(deleteUsersActionCreator(id))
    }
};


export const registrationThunk = (data) =>{
    return async (dispatch) => {
        let regData = await registrationApi(data, '1');
        if (regData.keyError === 0){
            dispatch(setSingleUserActionCreator(data))
        }
        else if (regData.keyError === 1){
            let action = stopSubmit('registrationFormAdmin', {login: regData.messages});
            dispatch(action)
        }
        else if (regData.keyError === 2){
            let action = stopSubmit('registrationFormAdmin', {password: " " , passwordRep: regData.messages});
            dispatch(action)
        }
        else if (regData.keyError === 3){
            let action = stopSubmit('registrationFormAdmin', {email: regData.messages});
            dispatch(action)
        }
    }
};
export const getUsersThunk = () => {
    return async (dispatch) => {
        let data = await getUsers();
        if (data.keyError === 0){
            dispatch(setUsersActionCreator(data.users));
        }
    }
};
