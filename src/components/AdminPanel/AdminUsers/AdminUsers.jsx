import React from 'react'
import UsersList from './UsersList/UsersList'
import Registrations from './RegistrationAdmin/Registration'
import Styles from "./adminUsers.module.css";

const AdminUsers = props => {
    return (
        <div className={Styles.main}>
            <div className={Styles.block1}>
                <div className={Styles.h2__line}>
                    <h2 className={Styles.h2}>New Admin</h2>
                </div>
                <Registrations onSubmit={props.regSubmit}/>
            </div>
            <div className={Styles.block2}>
                <div className={Styles.h2__line} style={{paddingTop: '20px'}}>
                    <h2 className={Styles.h2}>Users</h2>
                </div>
                <UsersList usersList={props.usersList}
                           deleteUser={props.deleteUser}
                           count={props.count}
                           getUsers={props.getUsers}
                           nowPage={props.nowPage}/>
            </div>
        </div>
    )
};


export default AdminUsers;