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
            <Chat/>
            <ProjectsInWork/>
        </div>
    )
};

export default PersonalArea;