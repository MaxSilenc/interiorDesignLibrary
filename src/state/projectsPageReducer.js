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
        {
            id: 1,
            title: 'title1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.',
            directLink: 'theme1'
        },
        {
            id: 2,
            title: 'title2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.',
            directLink: 'theme2'
        },
        {
            id: 3,
            title: 'title3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.',
            directLink: 'theme3'
        },
        {
            id: 4,
            title: 'title4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.',
            directLink: 'theme4'
        },
    ],
    NewProjectInput: {title: "", text: "", directLink: "",}
};

export const addProjectActionCreator = () => {
    return {type: "ADD-PROJECT"}
};
export const updateNewProjectActionCreator = (text, title, directLink) => {
    return {type: "NEW-PROJECT-INPUT", text: text, title: title, directLink: directLink}
};

export const projectsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_PROJECT: {
            let stateCopy = {...state};
            stateCopy.ProjectsArr = [...state.ProjectsArr];
            stateCopy.NewProjectInput = {...state.NewProjectInput};

            let newProject = {
                title: state.NewProjectInput.title,
                text: state.NewProjectInput.text,
                directLink: state.NewProjectInput.directLink,
            };
            console.log(newProject);
            stateCopy.ProjectsArr.push(newProject);
            stateCopy.NewProjectInput.text = '';
            stateCopy.NewProjectInput.title = '';
            stateCopy.NewProjectInput.directLink = '';
            return stateCopy;
        }
        case NEW_PROJECT_INPUT: {
            let stateCopy = {...state};
            stateCopy.NewProjectInput = {...state.NewProjectInput};
            console.log(action);
            stateCopy.NewProjectInput.title = action.title;
            stateCopy.NewProjectInput.text = action.text;
            stateCopy.NewProjectInput.directLink = action.directLink;
            return stateCopy;
        }
        default:
            return state;
    }
};
