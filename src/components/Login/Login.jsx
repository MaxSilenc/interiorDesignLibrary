import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field type="password" placeholder={'password'} component={'input'} name={'password'}/>
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
