import {Field, reduxForm} from "redux-form";
import {Input} from './../../../Login/LoginForms'
import {Textarea} from "../../../ProjectPage/ComentsBlock/CommentsForm/CommentsFormInput";
import {Required} from "../../../../forms/validation";
import {FieldFileInput} from './form'
import React from 'react';
import Styles from "./projectsForm.module.css";
import emptyImg from './../../../../img/emptyImgPreveiw.jpg'

const addProjectsForm = (props) =>{

    const test = (e, id) => {
        let reader = new FileReader();
        reader.onload = function(){
            let output = document.getElementById(id);
            output.src = reader.result;
        };
        reader.readAsDataURL(e[0]);
    };

    return (
        <form onSubmit={props.handleSubmit} className={Styles.form}>
            <div className={Styles.block1}>
                <Field component={FieldFileInput} name={'img'} accept='.jpg, .png, .jpeg' className={Styles.hide} id={'img1'}
                       onChange={e => test(e, 'labelImg1')}/>
                <label htmlFor="img1" id={'label__1'}>
                    <img src={emptyImg} alt="" className={Styles.input__img} id={'labelImg1'}/>
                </label>
            </div>
            <div className={Styles.block2}>
                <Field component={FieldFileInput} name={'img2'} accept='.jpg, .png, .jpeg' id={'img2'} className={Styles.hide}
                       onChange={e => test(e, 'labelImg2')}/>
                <label htmlFor="img2">
                    <img src={emptyImg} alt="" className={Styles.input__img} id={'labelImg2'}/>
                </label>
            </div>
            <div className={Styles.block3}>
                <Field component={FieldFileInput} name={'img3'} accept='.jpg, .png, .jpeg' id={'img3'} className={Styles.hide}
                       onChange={e => test(e, 'labelImg3')}/>
                <label htmlFor="img3">
                    <img src={emptyImg} alt="" className={Styles.input__img} id={'labelImg3'}/>
                </label>
            </div>
            <div className={Styles.block4}>
                <div>
                    <h6 className={Styles.input__label}>title:</h6>
                    <Field type="text" placeholder={'title'} component={Input}
                           name={'headline_name'} validate={[Required]} className="form-control"/>
                </div>
                <div>
                    <h6 className={Styles.input__label}>theme:</h6>
                    <Field type="text" placeholder={'theme'} component={Input}
                           name={'theme'} validate={[Required]} className="form-control"/>
                </div>
                <div>
                    <h6 className={Styles.input__label}>type:</h6>
                    <Field type="text" placeholder={'type'} component={Input}
                           name={'type'} validate={[Required]} className="form-control"/>
                </div>
                <div>
                    <h6 className={Styles.input__label}>file name:</h6><
                    Field type="text" placeholder={'name'} component={Input}
                          name={'name'} validate={[Required]} className="form-control"/>
                </div>
            </div>
            <div className={Styles.block5}>
                <h6 className={Styles.input__label}>text:</h6>
                <Field type="text" placeholder={'text'} component={Textarea}
                       name={'text'} validate={[Required]} className="form-control" rows={12} />
            </div>
            <div className={Styles.block6}>
                <div>
                    <Field component={FieldFileInput} name={'project'} multiple id={'projects_files'} className={Styles.hide}/>
                    <label htmlFor="projects_files" className={Styles.project__label}>
                        <div className="btn btn-outline-dark">upload projects files</div>
                    </label>
                </div>
                <div className={'form-check'}>
                    <Field name="inWork" id="inWork" component={Input} type="checkbox"
                           className="form-check-input"/>
                    <label className="form-check-label" htmlFor="inWork">in work</label>
                </div>
                <div>
                    <h6 className={Styles.input__label}>username:</h6>
                    <Field type="text" placeholder={'username'} component={Input} name={'username'} className="form-control"/>
                </div>
                <div className={Styles.submit__form}>
                    <button className="btn btn-outline-success">add</button>
                </div>
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
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>Add project</h2>
            </div>
            <AddProjectsFormRF {...props} onSubmit={onSubmitform}/>
        </div>
    )
};
export default ProjectsForm;