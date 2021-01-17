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
        case ADD_PROJECT: {
            let stateCopy = {...state};
            stateCopy.ProjectsArr = [...state.ProjectsArr];
            stateCopy.NewProjectInput = {...state.NewProjectInput};

            let newProject = {
                title: state.NewProjectInput.title,
                text: state.NewProjectInput.text
            };
            stateCopy.ProjectsArr.push(newProject);
            stateCopy.NewProjectInput.text = '';
            stateCopy.NewProjectInput.title = '';
            return stateCopy;
        }
        case NEW_PROJECT_INPUT: {
            let stateCopy = {...state};
            stateCopy.NewProjectInput = {...state.NewProjectInput};

            stateCopy.NewProjectInput.title = action.title;
            stateCopy.NewProjectInput.text = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
};
