import {getCurrUserThunk} from './authReducer'

import React from "react";
import {currUser} from "../api/api";

const INITIALISED = 'INITIALISED';



let initialState = {
    initialised: false
};

export const initialisedAC = () => {return {type: "INITIALISED"}};

export const appReducer = (state = initialState, action) => {
    switch (action.type){
        case INITIALISED: {
            return {
                ...state,
                initialised:true
            }
        }

        default:
            return state
    }
};


export const initialisedThunk = () =>{
    return async (dispatch) =>{
        let data = dispatch(getCurrUserThunk());

        data.then(() => dispatch(initialisedAC()))
    }
};


