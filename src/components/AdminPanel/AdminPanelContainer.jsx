import React from 'react';
import {addProjectActionCreator, updateNewProjectActionCreator} from "../../state/state";
import AdminPanel from "./AdminPanel";
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        state: state.projectsPage.NewProjectInput
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewProject: (text, title) => {dispatch(updateNewProjectActionCreator(text, title))},
        addProject: () => {dispatch(addProjectActionCreator())}
    }
};


const AdminPanelContainer = connect(mapStateToProps, mapDispatchToProps)(AdminPanel);


export default AdminPanelContainer;