import React from 'react'
import UsersList from './UsersList/UsersList'
import Registrations from './RegistrationAdmin/Registration'

const AdminUsers = props => {
    return (
        <div>
            <h1>adminUsersPage</h1>
            <UsersList usersList={props.usersList} deleteUser={props.deleteUser}/>
            <Registrations onSubmit={props.regSubmit}/>
        </div>
    )
};


export default AdminUsers;