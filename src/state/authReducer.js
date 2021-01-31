import {currUser} from "../api/api";

const SET_USER = 'SET_USER';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

export const setUserActionCreator = (userId, email, login) => {return {type: "SET_USER", data: {userId, email, login}}};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER: {
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        }

        default:
            return state
    }
};

export const getCurrUserThunk = () =>{
    return (dispatch) =>{
        currUser().then(data => {
            if (data.errorKey != 0) dispatch(setUserActionCreator(data.id, data.email, data.login))
        });
    }
};