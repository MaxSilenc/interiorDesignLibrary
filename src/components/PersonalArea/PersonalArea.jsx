import React from 'react';
import UserCredentialsForm from './UserCredentialsForm/UserCredentialsForm'
import Chat from './Chat/Chat'
import ProjectsInWork from  './ProjectInWork/ProjectsInWork'

const PersonalArea = (props) =>{
    return (
        <div>
            <h1>PersonalArea</h1>
            <h1>padding</h1>
            <UserCredentialsForm user={props.user} onSubmit={props.onSubmit}/>
            <Chat chat={props.state.chat} messages={props.state.messages}
                  user={props.user} updateMessage={props.updateMessage} addMessage={props.addMessage}/>
            <ProjectsInWork/>
        </div>
    )
};

export default PersonalArea;