import React from 'react';
import {Field, reduxForm} from "redux-form";
import {MaxLengthCreator, Required, ValidPass} from "../../../../forms/validation";
import {Input} from "../../../Login/LoginForms";
import Styles from './Registration.module.css'

let MaxLength = MaxLengthCreator(20);
const RegistrationForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit} className={Styles.form}>
            <div>
                <h6 className={Styles.input__label}>login:</h6>
                <Field type="text" placeholder={'login'} component={Input} name={'login'} validate={[Required, MaxLength]} className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>email:</h6>
                <Field type="email" placeholder={'email'} component={Input} name={'email'} validate={[Required]} className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>name:</h6>
                <Field type="text" placeholder={'name'} component={Input} name={'name'} validate={[Required]} className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>last name:</h6>
                <Field type="text" placeholder={'last name'} component={Input} name={'lastName'} validate={[Required]} className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>password:</h6>
                <Field type="password" placeholder={'password'} component={Input} name={'password'} validate={[Required, ValidPass]} className="form-control"/>
            </div>
            <div>
                <h6 className={Styles.input__label}>password repeat:</h6>
                <Field type="password" placeholder={'password'} component={Input} name={'passwordRep'} validate={[Required, ValidPass]} className="form-control"/>
            </div>
            <div className={Styles.submit__form}>
                <button className="btn btn-outline-success">register</button>
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