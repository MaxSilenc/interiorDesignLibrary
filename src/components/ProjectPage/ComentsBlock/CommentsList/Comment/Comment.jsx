import React from 'react';
import Styles from './comment.module.css'

const Comment = (props) =>{
    debugger
    return (
        <div>
            {(props.user === props.author)?
                <div className={Styles.me}>{props.author}:</div>
                :
                <div>{props.author}:</div>
            }
            <div>
                {props.text}
            </div>
        </div>
    );
};

export default Comment