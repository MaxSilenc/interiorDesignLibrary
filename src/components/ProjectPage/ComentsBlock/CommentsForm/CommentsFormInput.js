import React from 'react';
import Styles from './commentsForm.module.css'

export const Textarea = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={hasError ? Styles.error: ''}>
                <textarea {...input} {...props}/>
            </div>
            <div className={Styles.errorMess}>{hasError && meta.error}</div>
        </div>
    )
};
