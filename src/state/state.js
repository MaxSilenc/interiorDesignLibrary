let store = {
    _state: {
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
                {title: 'title3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
            ],
            NewProjectInput: {title: "", text: ""}
        }
    },

    getState() {
        return this._state;
    },
    renderApp(){
        console.log('changed')
    },
    addProject(){
        let newProject = {
            title: this._state.projectsPage.NewProjectInput.title,
            text: this._state.projectsPage.NewProjectInput.text
        };

        this._state.projectsPage.ProjectsArr.push(newProject);
        this.updateNewProject('', '');
        this.renderApp(this._state);
    },
    updateNewProject(title, text) {
        this._state.projectsPage.NewProjectInput.title = title;
        this._state.projectsPage.NewProjectInput.text = text;
        this.renderApp(this._state);
    },
    subscribe(observer) {
        this.renderApp = observer;
    }

};

export default store;

