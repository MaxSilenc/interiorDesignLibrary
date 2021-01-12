import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let slideArr = [
    {modify: ' active', text_h5: 'first slide'},
    {modify: '', text_h5: 'second slide'},
    {modify: '', text_h5: 'third slide'},
];

let NavLinksArr = [
    {id: '1', name: 'theme 1'},
    {id: '2', name: 'theme 2'},
    {id: '3', name: 'theme 3'},
    {id: '4', name: 'theme 4'}
];

let ProjectsArr = [
    {title: 'title1', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
    {title: 'title2', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'},
    {title: 'title3', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus praesentium quos vero.'}
];



ReactDOM.render(
  <React.StrictMode>
    <App slideArr={slideArr} NavLinksArr={NavLinksArr} ProjectsArr={ProjectsArr}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
