import {Field, reduxForm} from "redux-form";
import {Input} from '../../../../Login/LoginForms'
import {Required} from "../../../../../forms/validation";
import Styles from './themesAndType.module.css'
import React from 'react';


const addThemesForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <h6 className={Styles.input__label}>theme:</h6>
                <Field type="text" placeholder={'theme'} component={Input} name={'name'} validate={[Required]} className="form-control"/>
            </div>
            <div className={Styles.submit__form}>
                <button className="btn btn-outline-success">add</button>
            </div>
        </form>
    )
};

const ThemesForm = reduxForm({
    form: 'Themes'
})(addThemesForm);

const Themes = (props) =>{

    const onSubmitform = (data) =>{
        props.addTheme('themes', data.name)
    };

    return (
        <div className={Styles.form}>
            <ThemesForm {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default Themes;