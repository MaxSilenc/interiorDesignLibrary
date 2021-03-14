import React from 'react';
import {connect} from 'react-redux'
import {getAuthDude} from "../../../selectors/selectors";
import {compose} from "redux";
import { Redirect } from "react-router-dom"
import AdminUser from './AdminUsers'
import {withRouter} from 'react-router-dom'
import {getUsersThunk, registrationThunk, deleteUserThunk} from './../../../state/usersPageAdminPanelReducer'

class AdminUsersComponent extends React.Component{

    componentDidMount() {
        this.props.getUsers()
    }

    regOnsubmit = (data) =>{
        this.props.registration(data)
    };

    render() {
        if (!this.props.user.isAuth) return <Redirect to={'/'}/>;
        if (!this.props.user.status) return <Redirect to={'/'}/>;
        return (
            <AdminUser {...this.props} regSubmit={this.regOnsubmit}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
        usersList: state.usersPage.users
    }
};



export default compose(
    connect(mapStateToProps,{
        getUsers: getUsersThunk,
        registration: registrationThunk,
        deleteUser: deleteUserThunk,
    }),
    withRouter
)(AdminUsersComponent);
