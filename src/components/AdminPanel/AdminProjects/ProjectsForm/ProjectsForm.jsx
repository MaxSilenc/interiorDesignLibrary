import {Field, reduxForm} from "redux-form";
import {Input} from './../../../Login/LoginForms'
import {Textarea} from "../../../ProjectPage/ComentsBlock/CommentsForm/CommentsFormInput";
import {Required} from "../../../../forms/validation";
import {FieldFileInput} from './form'
import React from 'react';

const addProjectsForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'title'} component={Input} name={'headline_name'} validate={[Required]}/>
            </div>
            <div>
                <Field type="text" placeholder={'name'} component={Input} name={'name'} validate={[Required]}/>
            </div>
            <div>
                <Field type="text" placeholder={'text'} component={Textarea} name={'text'} validate={[Required]}/>
            </div>
            <div>
                <Field type="text" placeholder={'theme'} component={Input} name={'theme'} validate={[Required]}/>
            </div>
            <div>
                <Field type="text" placeholder={'type'} component={Input} name={'type'} validate={[Required]}/>
            </div>
            <div>
                <Field component={FieldFileInput} name={'img'} required accept='.jpg, .png, .jpeg'/>
            </div>
            <div>
                <Field component={FieldFileInput} name={'img2'} required accept='.jpg, .png, .jpeg'/>
            </div>
            <div>
                <Field component={FieldFileInput} name={'img3'} required accept='.jpg, .png, .jpeg'/>
            </div>
            <div>
                <Field component={FieldFileInput} name={'project'} multiple/>
            </div>
            <div>
                <button>add</button>
            </div>
        </form>
    )
};

const AddProjectsFormRF = reduxForm({
    form: 'addProjectForm'
})(addProjectsForm);

const ProjectsForm = (props) =>{

    const onSubmitform = (data) =>{
        console.log(data)
    };

    return (
        <div>
            <h1>addProjectsForm</h1>
            <AddProjectsFormRF {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default ProjectsForm;