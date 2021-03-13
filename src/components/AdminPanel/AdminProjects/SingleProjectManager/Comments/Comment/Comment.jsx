import React from 'react'

const Comment = props =>{

    const deleteOnClick = () =>{
        props.updateComment(props.comment.id, '', props.projectId)
    };

    return (
        <tr>
            <th scope="row">{props.comment.id}</th>
            <td>{props.comment.author}</td>
            <td>
                <textarea name="" id="" cols="40" rows="1" readOnly
                          value={props.comment.text} className="form-control"/>
            </td>
            <td><button onClick={deleteOnClick} className="btn btn-danger">delete</button></td>
        </tr>
    )
};

export default Comment;