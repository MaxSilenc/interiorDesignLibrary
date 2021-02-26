import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from './../../Login/LoginForms'

const changeCredForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {props.user.login}<Field type="text" placeholder={'New login'} component={Input} name={'login'}/>
            </div>
            <div>
                {props.user.email}<Field type="email" placeholder={'New email'} component={Input} name={'email'}/>
            </div>
            <div>
                {props.user.name}<Field type="text" placeholder={'New name'} component={Input} name={'name'}/>
            </div>
            <div>
                {props.user.lastName}<Field type="text" placeholder={'New last name'} component={Input} name={'lastName'}/>
            </div>
            <div>
                <button>save</button>
            </div>
        </form>
    )
};

const ChangeCredReduxForm = reduxForm({
    form: 'ChangeGred'
})(changeCredForm);

const UserCredentialsForm = (props) =>{
    return (
        <div>
            <h1>UserCredentialsForm</h1>
            <ChangeCredReduxForm onSubmit={props.onSubmit} {...props}/>
        </div>
    )
};
export default UserCredentialsForm;