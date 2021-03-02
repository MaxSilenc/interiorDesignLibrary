
export const updateCommentFun = (state, action) =>{
    let newState = {...state};
    let messages = [...state.messages];
    for (let i = 0; i < messages.length; i++){
        if (messages[i].id === action.id){
            if (action.text === '') newState.messages.splice(i, 1);
            else messages[i].text = action.text;
            return newState
        }
    }
    return state
};

export const addMessageFun = (state, action) =>{
    let stateCopy = {...state};
    stateCopy.messages = [...state.messages];

    let newComment = {...action.data};
    stateCopy.messages.push(newComment);
    return stateCopy;
};