import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from './../../Login/LoginForms'
import {Required} from "../../../forms/validation";

const changeCredForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'login'} component={Input} name={'login'} validate={[Required]}/>
            </div>
            <div>
                <Field type="email" placeholder={'email'} component={Input} name={'email'} validate={[Required]}/>
            </div>
            <div>
                <Field type="text" placeholder={'name'} component={Input} name={'name'} validate={[Required]}/>
            </div>
            <div>
                <Field type="text" placeholder={'last name'} component={Input} name={'lastName'} validate={[Required]}/>
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
            <ChangeCredReduxForm/>
        </div>
    )
};
export default UserCredentialsForm;