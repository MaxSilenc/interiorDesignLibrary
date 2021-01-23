const ADD_COMMENT = 'ADD-COMMENT';
const NEW_COMMENT_INPUT = "NEW-COMMENT-INPUT";
const SET_THIS_PROJECT = "SET_THIS_PROJECT";


let initialState = {
    comments: [
        {id:'1', author: 'author1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
        {id:'2', author: 'author2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
        {id:'3', author: 'author3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
        {id:'4', author: 'author4', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing'},
    ],
    NewCommentInput: {text: '', author: 'user'},
    thisProject: {}
};

export const addCommentActionCreator = () => {return {type: "ADD-COMMENT"}};
export const updateNewCommentActionCreator = (text) => {return {type: "NEW-COMMENT-INPUT", text: text}};
export const setThisProjectCommentActionCreator = (project) => {return {type: "SET_THIS_PROJECT", project: project}};


export const commentsFormReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COMMENT: {
            let stateCopy = {...state};
            stateCopy.comments = [...state.comments];
            stateCopy.NewCommentInput = {...state.NewCommentInput};

            let newComment = {
                text: state.NewCommentInput.text,
                author: state.NewCommentInput.author,
            };
            stateCopy.comments.push(newComment);
            stateCopy.NewCommentInput.text = '';
            stateCopy.NewCommentInput.author = 'user';
            return stateCopy;
        }
        case NEW_COMMENT_INPUT: {
            let stateCopy = {...state};
            stateCopy.NewCommentInput = {...state.NewCommentInput};
            stateCopy.NewCommentInput.author = state.NewCommentInput.author;
            stateCopy.NewCommentInput.text = action.text;
            return stateCopy;
        }
        case SET_THIS_PROJECT: {
            return {...state, thisProject: action.project}
        }
        default:
            return state
    }
};
