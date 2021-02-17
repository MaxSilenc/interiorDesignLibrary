import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Required} from "../../forms/validation";
import {Input} from './LoginForms'
import {NavLink} from "react-router-dom";

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'login or email'} component={Input} name={'login'} validate={[Required]}/>
            </div>
            <div>
                <Field type="password" placeholder={'password'} component={Input} name={'password'} validate={[Required]}/>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) =>{
    return (
        <div>
            <h1>login</h1>
            <h1>padding</h1>
            <NavLink to="/registration">go registration</NavLink>
            <LoginReduxForm onSubmit={props.onSubmit}/>
        </div>
    )
};


export default Login;
