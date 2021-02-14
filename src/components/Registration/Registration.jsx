import React from 'react';
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, Required, ValidPass} from "../../forms/validation";
import {Input} from "../Login/LoginForms";


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

const LoginReduxForm = reduxForm({
    form: 'registrationForm'
})(RegistrationForm);

const Registration = (props) =>{
    return (
        <div>
            <h1>padding</h1>
            <h1>padding</h1>
            <LoginReduxForm {...props} onSubmit={props.onSubmit}/>
        </div>
    )
};

export default Registration