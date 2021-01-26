import {combineReducers, createStore} from 'redux'
import {projectsPageReducer} from './projectsPageReducer'
import {sliderSectionPageReducer} from './sliderSectionPageReducer'
import {commentsFormReducer} from "./commentsFormReducer";
import {authReducer} from "./authReducer";

let redusers = combineReducers({
    projectsPage: projectsPageReducer,
    sliderSectionPage: sliderSectionPageReducer,
    commentsBlockPage: commentsFormReducer,
    auth: authReducer
});


let store = createStore(redusers);
window.store = store;
export default store;