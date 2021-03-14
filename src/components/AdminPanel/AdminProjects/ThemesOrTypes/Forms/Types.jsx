import {Field, reduxForm} from "redux-form";
import {Input} from '../../../../Login/LoginForms'
import {Required} from "../../../../../forms/validation";
import Styles from './themesAndType.module.css'
import React from 'react';


const addTypesForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <h6 className={Styles.input__label}>type:</h6>
                <Field type="text" placeholder={'type'} component={Input} name={'name'} validate={[Required]} className="form-control"/>
            </div>
            <div className={Styles.submit__form}>
                <button className="btn btn-outline-success">add</button>
            </div>
        </form>
    )
};

const TypesForm = reduxForm({
    form: 'Types'
})(addTypesForm);

const Types = (props) =>{

    const onSubmitform = (data) =>{
        props.addType('types', data.name)
    };

    return (
        <div className={Styles.form}>
            <TypesForm {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default Types;