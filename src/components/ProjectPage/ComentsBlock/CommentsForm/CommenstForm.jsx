import React, {useEffect} from 'react';
import Styles from './commentsForm.module.css'
import {Field, reduxForm} from "redux-form";
import {Required, MaxLengthCreator} from "../../../../forms/validation";
import {Textarea} from "./CommentsFormInput";
import {compose} from "redux";
import {connect} from "react-redux";
import {AuthCheck} from "../../../../hoc/AuthCheck";
import {addCommentThunk} from "../../../../state/commentsFormReducer";
import {getAuthDude, getCommentsBlockPage} from "../../../../selectors/selectors";
import {withRouter} from 'react-router-dom'

let MaxLength = MaxLengthCreator(200);

const ProjectPageForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={Textarea} name={'comment'} validate={[Required, MaxLength]}
                           placeholder={'comment'} cols={'100'} rows={'4'} wrap={'hard'}/>
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
        thisProject: getCommentsBlockPage(state).thisProject.id,
    }
};

export default compose(
    connect(mapStateToProps, {
        addComment: addCommentThunk,
    }),
    AuthCheck,
    withRouter
)(CommentsForm);