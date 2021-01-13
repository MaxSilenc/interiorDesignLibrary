import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addProject} from "./state/state";


export let renderApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addProject={addProject}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};