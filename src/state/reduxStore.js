import {combineReducers, createStore} from 'redux'
import {projectsPageReducer} from './projectsPageReducer'
import {sliderSectionPageReducer} from './sliderSectionPageReducer'
import {commentsFormReducer} from "./commentsFormReducer";

let redusers = combineReducers({
    projectsPage: projectsPageReducer,
    sliderSectionPage: sliderSectionPageReducer,
    commentsBlockPage: commentsFormReducer
});

let store = createStore(redusers);
export default store;