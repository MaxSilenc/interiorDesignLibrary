import reportWebVitals from './reportWebVitals';
import store from './state/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.state = store.getState();
export let renderApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderApp(store.getState());

store.subscribe(() => {
    renderApp(store.getState());
});


reportWebVitals();
