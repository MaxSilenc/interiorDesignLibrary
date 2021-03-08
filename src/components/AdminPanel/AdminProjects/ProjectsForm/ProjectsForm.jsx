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
                title:<Field type="text" placeholder={'title'} component={Input} name={'headline_name'} validate={[Required]}/>
            </div>
            <div>
                name:<Field type="text" placeholder={'name'} component={Input} name={'name'} validate={[Required]}/>
            </div>
            <div>
                text:<Field type="text" placeholder={'text'} component={Textarea} name={'text'} validate={[Required]}/>
            </div>
            <div>
                theme:<Field type="text" placeholder={'theme'} component={Input} name={'theme'} validate={[Required]}/>
            </div>
            <div>
                type:<Field type="text" placeholder={'type'} component={Input} name={'type'} validate={[Required]}/>
            </div>
            <div>
                preview:<Field component={FieldFileInput} name={'img'} required accept='.jpg, .png, .jpeg'/>
            </div>
            <div>
                preview:<Field component={FieldFileInput} name={'img2'} required accept='.jpg, .png, .jpeg'/>
            </div>
            <div>
                preview:<Field component={FieldFileInput} name={'img3'} required accept='.jpg, .png, .jpeg'/>
            </div>
            <div>
                project file<Field component={FieldFileInput} name={'project'} multiple/>
            </div>
            <div>
                in work: <Field name="inWork" id="inWork" component={Input} type="checkbox"/> username: <Field type="text" placeholder={'username'} component={Input} name={'username'}/>
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
        let form_data = new FormData();
        form_data.append('headline_name', data.headline_name);
        form_data.append('name', data.name);
        form_data.append('img', data.img[0], data.img[0].name);
        form_data.append('img2', data.img2[0], data.img2[0].name);
        form_data.append('img3', data.img3[0], data.img3[0].name);
        form_data.append('text', data.text);
        form_data.append('username', data.username);
        for (let file of data.project){
            form_data.append('project', file);
        }
        form_data.append('theme_id', data.theme);
        form_data.append('type', data.type);
        if (data.inWork === undefined)
            form_data.append('in_work', '0');
        else if (data.inWork === false){
            form_data.append('in_work', '0');
        } else form_data.append('in_work', '1');

        props.addProject(form_data);
    };

    return (
        <div>
            <h1>addProjectsForm</h1>
            <AddProjectsFormRF {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default ProjectsForm;