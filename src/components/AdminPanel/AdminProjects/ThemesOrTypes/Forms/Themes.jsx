import {Field, reduxForm} from "redux-form";
import {Input} from '../../../../Login/LoginForms'
import {Required} from "../../../../../forms/validation";

import React from 'react';


const addThemesForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'theme'} component={Input} name={'name'} validate={[Required]}/>
            </div>
            <div>
                <button>add</button>
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
        <div>
            <h1>add themes</h1>
            <ThemesForm {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default Themes;