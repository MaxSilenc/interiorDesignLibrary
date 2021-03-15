import React from 'react'
import SingleChat from './SingleChat/SingleChat'
import Styles from './usersWithoutAdminList.module.css'

const UserWithoutAdminList = props =>{
    let chats = props.emptyChats.map(el => <SingleChat key={el.id} id={el.id} user={el.user}
                                                       takeChat={props.takeChat} adminname={props.adminname}/>);

    return (
        <div className={Styles.main}>
            <div className={Styles.table}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col"/>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {chats}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default UserWithoutAdminList;