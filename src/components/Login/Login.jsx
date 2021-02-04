import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Required} from "../../forms/validation";
import {Input} from './LoginForms'

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'login'} component={Input} name={'login'} validate={[Required]}/>
            </div>
            <div>
                <Field type="password" placeholder={'password'} component={Input} name={'password'} validate={[Required]}/>
            </div>
            <div>
                <Field type="checkbox" component={'input'} name={'rememberMe'}/> remember me
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
    const onSubmit = (data) =>{
        console.log(data)
    };

    return (
        <div>
            <h1>login</h1>
            <h1>padding</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};


export default Login;
