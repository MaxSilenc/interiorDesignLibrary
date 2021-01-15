const ADD_PROJECT = 'ADD-PROJECT';
const NEW_PROJECT_INPUT = "NEW-PROJECT-INPUT";


let initialState = {
    NavLinksArr: [
        {id: '1', name: 'theme 1'},
        {id: '2', name: 'theme 2'},
        {id: '3', name: 'theme 3'},
        {id: '4', name: 'theme 4'}
    ],
    ProjectsArr: [
        {title: 'title1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
        {title: 'title2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
        {title: 'title3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
    ],
    NewProjectInput: {title: "", text: ""}
};

export const projectsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PROJECT:
            let newProject = {
                title: state.NewProjectInput.title,
                text: state.NewProjectInput.text
            };
            state.ProjectsArr.push(newProject);
            state.NewProjectInput.text = '';
            state.NewProjectInput.title = '';
            return state;

        case NEW_PROJECT_INPUT:
            state.NewProjectInput.title = action.title;
            state.NewProjectInput.text = action.text;
            return state;
        default:
            return state;
    }
};
