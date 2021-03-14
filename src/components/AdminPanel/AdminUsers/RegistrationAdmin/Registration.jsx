import React from 'react';
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, Required, ValidPass} from "../../../../forms/validation";
import {Input} from "../../../Login/LoginForms";
import Styles from './Registration.module.css'

let MaxLength = MaxLengthCreator(20);
const RegistrationForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'login'} component={Input} name={'login'} validate={[Required, MaxLength]}/>
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
                <Field type="password" placeholder={'password'} component={Input} name={'password'} validate={[Required, ValidPass]}/>
            </div>
            <div>
                <Field type="password" placeholder={'password'} component={Input} name={'passwordRep'} validate={[Required, ValidPass]}/>
            </div>
            <div>
                <button>submit</button>
            </div>
        </form>
    )
};

const RegistrationReduxForm = reduxForm({
    form: 'registrationFormAdmin'
})(RegistrationForm);

const Registration = (props) =>{
    return (
        <div>
            <RegistrationReduxForm onSubmit={props.onSubmit}/>
        </div>
    )
};

export default Registration