import {combineReducers, createStore} from 'redux'
import {projectsPageReducer} from './projectsPageReducer'
import {sliderSectionPageReducer} from './sliderSectionPageReducer'

let redusers = combineReducers({
    projectsPage: projectsPageReducer,
    sliderSectionPage: sliderSectionPageReducer
});

let store = createStore(redusers);

export default store;