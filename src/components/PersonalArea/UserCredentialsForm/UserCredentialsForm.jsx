import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from './../../Login/LoginForms'
import Styles from "./UserCredForm.module.css";

const changeCredForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} className={Styles.form}>
            <div>
                <h6 className={Styles.input__label}>{props.user.login}</h6>
                <Field type="text" placeholder={'New login'} component={Input} name={'login'}  className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>{props.user.email}</h6>
                <Field type="email" placeholder={'New email'} component={Input} name={'email'}  className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>{props.user.name}</h6>
                <Field type="text" placeholder={'New name'} component={Input} name={'name'}  className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>{props.user.lastName}</h6>
                <Field type="text" placeholder={'New last name'} component={Input} name={'lastName'}  className="form-control"/>
            </div>
            <div className={Styles.button}>
                <button className="btn btn-outline-success">save</button>
            </div>
        </form>
    )
};

const ChangeCredReduxForm = reduxForm({
    form: 'ChangeGred'
})(changeCredForm);

const UserCredentialsForm = (props) =>{
    return (
        <div className={Styles.main}>
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>Update data</h2>
            </div>
            <ChangeCredReduxForm onSubmit={props.onSubmit} {...props}/>
        </div>
    )
};
export default UserCredentialsForm;