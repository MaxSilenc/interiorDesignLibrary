import React from 'react'
import Comment from './Comment/Comment'

const Comments = props =>{

    let comments = props.comments.map(el => <Comment comment={el} key={el.id} updateComment={props.updateComment}
                                                     projectId={props.projectId}/>);

    return (
        <div>
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
        </div>
    )
};


export default Comments;