import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Required} from "../../forms/validation";
import {Input} from './LoginForms'
import {NavLink} from "react-router-dom";
import GoogleLoginComponent from './GoogleLogin/GoogleLogin';
import Styles from './login.module.css'

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <h6 className={Styles.input__label}>username</h6>
                <Field type="text" placeholder={'login or email'} component={Input} name={'login'} validate={[Required]}  className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>password</h6>
                <Field type="password" placeholder={'password'} component={Input} name={'password'} validate={[Required]}  className="form-control"/>
            </div>
            <div className={Styles.button}>
                <button className="btn btn-outline-success">login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) =>{
    return (
        <div className={Styles.main}>
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>login</h2>
            </div>
            <div className={Styles.block}>
                <div className={Styles.sameLogin}>
                    <div className={Styles.reg}>
                        <NavLink to="/registration">
                            <button className="btn btn-outline-info" style={{padding: '12px'}}>
                                go registration
                            </button>
                        </NavLink>
                    </div>
                    <div className={Styles.google__block}>
                        <GoogleLoginComponent onSocialRegSubmit={props.onSocialRegSubmit}/>
                    </div>
                </div>
                <div>
                    <LoginReduxForm onSubmit={props.onSubmit}/>
                </div>
            </div>
        </div>
    )
};


export default Login;
