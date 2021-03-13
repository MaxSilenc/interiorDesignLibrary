import React from 'react'
import Comment from './Comment/Comment'
import Styles from './Comments.module.css'
import {NavLink} from "react-router-dom";

const Comments = props =>{
    let buttons = [];
    for (let i = 1; i <= Math.ceil(props.count / 20); i++){
        buttons.push(i);
    }

    let comments = props.comments.map(el => <Comment comment={el} key={el.id} updateComment={props.updateComment}
                                                     projectId={props.projectId}/>);


    return (
        <div className={Styles.main}>
            <h1>Comments</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">author</th>
                    <th scope="col">message</th>
                </tr>
                </thead>
                <tbody>
                {comments}
                </tbody>
            </table>
            <div className={Styles.pagination}>
                {buttons.map(el => {
                    return <NavLink to={'/singleProjectPage/' + props.projectId + '/' + el} key={el}>
                        <button onClick={() => {
                            props.getCommentsForCurrProject(props.projectId, el);
                        } } className="btn btn-outline-dark">{el}</button>
                    </NavLink>
                })}
            </div>
        </div>
    )
};


export default Comments;