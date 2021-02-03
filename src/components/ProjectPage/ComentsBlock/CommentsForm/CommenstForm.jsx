import React from 'react';
import Styles from './commentsForm.module'
import {Field, reduxForm} from "redux-form";

const ProjectPageForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={'textarea'} name={'comment'}/>
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
        // console.log({
        //     projectId: props.projectId.id,
        //     author: props.user.login,
        //     text: data.comment
        // })
    };

    return (
        <CommentsFormForm onSubmit={onSubmit}/>
    );
};

export default CommentsForm;
