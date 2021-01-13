import {renderApp} from "../render";

let state = {
    sliderSectionPage: {
        slideArr: [
            {modify: ' active', text_h5: 'first slide'},
            {modify: '', text_h5: 'second slide'},
            {modify: '', text_h5: 'third slide'},
        ]
    },
    projectsPage: {
        NavLinksArr: [
            {id: '1', name: 'theme 1'},
            {id: '2', name: 'theme 2'},
            {id: '3', name: 'theme 3'},
            {id: '4', name: 'theme 4'}
        ],
        ProjectsArr: [
            {title: 'title1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
            {title: 'title2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
            {title: 'title3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'}
        ]
    }
};

export let addProject = (titel, text) => {
    let newProject = {
        title: titel,
        text: text
    };
    state.projectsPage.ProjectsArr.push(newProject);
    renderApp(state);
};


export default state;

