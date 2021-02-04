import React from 'react';
import Styles from './commentsForm.module.css'
import {Field, reduxForm} from "redux-form";
import {Required, MaxLengthCreator} from "../../../../forms/validation";
import {Textarea} from "./CommentsFormInput";

let MaxLength = MaxLengthCreator(200);

const ProjectPageForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'comment'} validate={[Required, MaxLength]} placeholder={'comment'} cols={'100'} rows={4}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

const CommentsFormForm = reduxForm({
    form: 'ProjectPageForm'
})(ProjectPageForm);

const CommentsForm = (props) =>{

    let onSubmit = (data) => {
        props.addComment({
            projectId: props.projectId.id,
            author: props.user.login,
            text: data.comment
        });
    };

    return (
        <CommentsFormForm onSubmit={onSubmit}/>
    );
};

export default CommentsForm;
