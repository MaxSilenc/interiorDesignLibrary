import reportWebVitals from './reportWebVitals';
import store from './state/state'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export let renderApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addProject={store.addProject.bind(store)}
                 updateNewProject={store.updateNewProject.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderApp(store.getState());
store.subscribe(renderApp);


reportWebVitals();
