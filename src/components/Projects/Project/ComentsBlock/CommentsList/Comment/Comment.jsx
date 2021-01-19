import React from 'react';
import Styles from './comment.module.css'

const Comment = (props) =>{
    return (
        <div>
            {props.author}: {props.text}
        </div>
    );
};

export default Comment