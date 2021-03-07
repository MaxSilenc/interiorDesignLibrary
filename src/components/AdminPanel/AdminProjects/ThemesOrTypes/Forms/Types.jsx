import {Field, reduxForm} from "redux-form";
import {Input} from '../../../../Login/LoginForms'
import {Required} from "../../../../../forms/validation";

import React from 'react';


const addTypesForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'type'} component={Input} name={'name'} validate={[Required]}/>
            </div>
            <div>
                <button>add</button>
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
        <div>
            <h1>add types</h1>
            <TypesForm {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default Types;