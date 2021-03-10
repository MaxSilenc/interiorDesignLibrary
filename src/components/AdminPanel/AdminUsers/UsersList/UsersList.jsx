import React from 'react'
import SingleUser from './SingleUser/SingleUser'

const UsersList = props =>{

    let users = props.usersList.map(el => <SingleUser user={el} key={el.userId } deleteUser={props.deleteUser}/>);

    return (
        <div>
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
        </div>
    )
};

export default UsersList;
