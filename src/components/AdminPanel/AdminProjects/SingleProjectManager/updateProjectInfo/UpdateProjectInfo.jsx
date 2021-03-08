import {Field, reduxForm} from "redux-form";
import {Input} from './../../../../Login/LoginForms'
import {Textarea} from "../../../../ProjectPage/ComentsBlock/CommentsForm/CommentsFormInput";
import {Required} from "../../../../../forms/validation";
import {FieldFileInput} from './../../ProjectsForm/form'
import React from 'react';


class updateProjectsForm extends React.Component{
    componentWillMount () {
        this.props.initialize({
            headline_name: this.props.currProject.title,
            name: this.props.currProject.name,
            text: this.props.currProject.text,
            theme: this.props.currProject.theme,
            type: this.props.currProject.type,
            username: this.props.currProject.username,
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.currProject !== prevProps.currProject){
            this.props.initialize({
                headline_name: this.props.currProject.title,
                name: this.props.currProject.name,
                text: this.props.currProject.text,
                theme: this.props.currProject.theme,
                type: this.props.currProject.type,
                username: this.props.currProject.username,
                inWork: this.props.currProject.work,
            });
        }
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    title:<Field type="text" placeholder={'title'} component={Input} name={'headline_name'} validate={[Required]}/>
                </div>
                <div>
                    file name:<Field type="text" placeholder={'name'} component={Input} name={'name'} validate={[Required]}/>
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
                    <a href={'http://127.0.0.1:8000' + this.props.currProject.img}>link</a>
                    <Field component={FieldFileInput} name={'img'} accept='.jpg, .png, .jpeg'/>
                </div>
                <div>
                    <a href={'http://127.0.0.1:8000' + this.props.currProject.img2}>link</a>
                    <Field component={FieldFileInput} name={'img2'} accept='.jpg, .png, .jpeg'/>
                </div>
                <div>
                    <a href={'http://127.0.0.1:8000' + this.props.currProject.img3}>link</a>
                    <Field component={FieldFileInput} name={'img3'} accept='.jpg, .png, .jpeg'/>
                </div>
                <div>
                    <a href={"http://127.0.0.1:8000/media/Ue4Project/" + this.props.currProject.name + "/" + this.props.currProject.name + ".html"}>start</a>
                    <Field component={FieldFileInput} name={'project'} multiple/>
                </div>
                <div>
                    in Work: <Field name="inWork" id="inWork" component={Input} type="checkbox"/>
                    username: <Field type="text" placeholder={'username'} component={Input} name={'username'}/>
                </div>
                <div>
                    <button>update</button>
                </div>
            </form>
        )
    }

};

const UpdateProjectsFormRF = reduxForm({
    form: 'updateProjects',
})(updateProjectsForm);

const UpdateProjectInfo = (props) =>{

    const onSubmitform = (data) =>{
        let form_data = new FormData();
        form_data.append('headline_name', data.headline_name);
        form_data.append('name', data.name);
        if (data.img === undefined)
            form_data.append('img', 'undefined');
        else
            form_data.append('img', data.img[0], data.img[0].name);
        if (data.img2 === undefined)
            form_data.append('img2', 'undefined');
        else
            form_data.append('img2', data.img2[0], data.img2[0].name);
        if (data.img3 === undefined)
            form_data.append('img3', 'undefined');
        else
            form_data.append('img3', data.img3[0], data.img3[0].name);
        form_data.append('text', data.text);
        form_data.append('username', data.username);
        form_data.append('id', props.currProject.id);
        form_data.append('whatToDo', 'update');
        if (data.project === undefined)
            form_data.append('project', 'undefined');
        else{
            for (let file of data.project){
                form_data.append('project', file);
            }
        }
        form_data.append('theme_id', data.theme);
        form_data.append('type', data.type);
        if (data.inWork === undefined)
            form_data.append('in_work', '0');
        else if (data.inWork === false){
            form_data.append('in_work', '0');
        } else form_data.append('in_work', '1');

        props.updateProject(form_data);
    };



    return (
        <div>
            <h1>addProjectsForm</h1>
            <UpdateProjectsFormRF {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default UpdateProjectInfo;