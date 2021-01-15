const ADD_PROJECT = 'ADD-PROJECT';
const NEW_PROJECT_INPUT = "NEW-PROJECT-INPUT";


export const projectsPageReducer = (state, action) => {

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
