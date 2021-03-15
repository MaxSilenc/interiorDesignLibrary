import React from 'react';
import UserCredentialsForm from './UserCredentialsForm/UserCredentialsForm'
import Chat from './Chat/Chat'
import ProjectsInWork from  './ProjectInWork/ProjectsInWork'
import Styles from './PersonalArea.module.css'

const PersonalArea = (props) =>{
    return (
        <div className={Styles.main}>
            <UserCredentialsForm user={props.user} onSubmit={props.onSubmit}/>
            <Chat chat={props.state.chat} messages={props.state.messages}
                  user={props.user} updateMessage={props.updateMessage} addMessage={props.addMessage}/>
            <ProjectsInWork state={props.state.projects}/>
        </div>
    )
};

export default PersonalArea;