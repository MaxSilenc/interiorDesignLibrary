import React from 'react';
import Styles from './commentsForm.module.css'
import {Field, reduxForm} from "redux-form";
import {Required, MaxLengthCreator} from "../../../../../forms/validation";
import {Textarea} from "./CommentsFormInput";
import {compose} from "redux";
import {connect} from "react-redux";
import {AuthCheck} from "../../../../../hoc/AuthCheck"
import {getAuthDude} from "../../../../../selectors/selectors";
import {withRouter} from 'react-router-dom'

let MaxLength = MaxLengthCreator(200);

const ProjectPageForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'comment'} validate={[Required, MaxLength]}
                           placeholder={'comment'} cols={'100'} rows={'4'} wrap="soft"/>
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
        props.addComment(data.comment, props.thisProject, props.user.login);
    };

    return (
        <CommentsFormForm onSubmit={onSubmit}/>
    );
};

let mapStateToProps = (state) => {
    return {
        user: getAuthDude(state),
    }
};

export default compose(
    connect(mapStateToProps, {
    }),
    AuthCheck,
    withRouter
)(CommentsForm);