import reportWebVitals from './reportWebVitals';
import store from './state/reduxStore'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";


export let renderApp = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
             <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
};

renderApp(store.getState());

store.subscribe(() => {
    renderApp(store.getState());
});


reportWebVitals();
