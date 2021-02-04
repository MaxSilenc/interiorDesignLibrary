import React from 'react';
import Styles from './login.module.css'

export const Input = ({input, meta, ...props}) =>{
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={hasError ? Styles.error: ''}>
                <input {...props} {...input}/>
            </div>
            <div className={Styles.errorMess}>{hasError && meta.error}</div>
        </div>
    )
};