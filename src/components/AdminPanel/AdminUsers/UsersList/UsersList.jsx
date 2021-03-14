import React from 'react'
import SingleUser from './SingleUser/SingleUser'
import Styles from './usersList.module.css'
import Paginator from './../../../common/Paginator/Paginator'

const UsersList = props =>{

    let users = props.usersList.map(el => <SingleUser user={el} key={el.userId } deleteUser={props.deleteUser}/>);

    return (
        <div className={Styles.main}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">login</th>
                    <th scope="col">email</th>
                    <th scope="col">name</th>
                    <th scope="col">last name</th>
                    <th scope="col">status</th>
                </tr>
                </thead>
                <tbody>
                {users}
                </tbody>
            </table>
            <div className={Styles.pagination}>
                <Paginator totalItemsCount={props.count}
                           pageSize={20}
                           currentPage={props.nowPage}
                           onPageChange={props.getUsers}
                           portionSize={5}
                           url={'/adminUsersPage/'}/>
            </div>
        </div>
    )
};

export default UsersList;
