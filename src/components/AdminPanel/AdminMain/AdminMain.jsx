import React from 'react'
import Links from './Links/Links'
import Chats from './Chats/Chats'
import Styles from './AdminMain.module.css'

const AdminPanel = props =>{
    return (
        <div className={Styles.main}>
            <Links userStatus={props.user.status}/>
            <div className={Styles.form}>
                <div>
                    <Chats user={props.user} myChatsList={props.myChatsList}
                           myMessages={props.myMessages} openChat={props.openChat}
                           updateMessage={props.updateMessage}
                           addAdminMessage={props.addAdminMessage}
                           thisProject={props.thisProject}
                           nowChat={props.nowChat}
                           emptyChats={props.emptyChats}
                           takeChat={props.takeChat}
                           adminname={props.user.login}/>
                </div>
            </div>
        </div>
    )
};

export default AdminPanel