import {getStat} from "../api/api";

const GET_STAT = "GET_STAT";

let initialState = {
    types: {},
    directions: {},
    projects: {}
};

export const setStat = (types, directions, projects) => {return {type: "GET_STAT", types, directions, projects}};

export const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAT:{
            return {...state, types: {...action.types}, directions: {...action.directions}, projects: {...action.projects}}
        }
        default:
            return state
    }
};

export const getStatThunk = () => {
    return async (dispatch) => {
        let data = await getStat();
        dispatch(setStat(data.types, data.direction, data.projects));
    }
};
