import {applyMiddleware, combineReducers, createStore} from 'redux'
import {projectsPageReducer} from './projectsPageReducer'
import {sliderSectionPageReducer} from './sliderSectionPageReducer'
import {commentsFormReducer} from "./commentsFormReducer";
import {authReducer} from "./authReducer";
import {PersonalAreaReducer} from  './PersonalAreaReducer'
import {adminReducer} from "./adminPanelReducer";
import {projectsManagerReducer} from "./projectsManagerReducer";
import {singleProjectManagerReducer} from "./singleProjectManageReducer";
import {usersPageAdminReducer} from './usersPageAdminPanelReducer'
import {statisticsReducer} from  './statisticsReducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form"

let redusers = combineReducers({
    projectsPage: projectsPageReducer,
    sliderSectionPage: sliderSectionPageReducer,
    commentsBlockPage: commentsFormReducer,
    auth: authReducer,
    form: formReducer,
    personalArea: PersonalAreaReducer,
    adminPage: adminReducer,
    projectsManager: projectsManagerReducer,
    singleProjectManager: singleProjectManagerReducer,
    usersPage: usersPageAdminReducer,
    statistics: statisticsReducer
});


let store = createStore(redusers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;