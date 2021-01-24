const SET_USER = 'SET_USER';



let initialState = {
    userId: null,
    email: null,
    login: null,
};

export const serUserActionCreator = (userId, email, login) => {return {type: "SET_USER", data: {userId, email, login}}};

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER: {
            return {
                ...state,
                ...action.data
            }
        }

        default:
            return state
    }
};
