import React from 'react'

const Comment = props =>{

    const deleteOnClick = () =>{
        props.updateComment(props.comment.id, '', props.projectId)
    };

    return (
        <tr>
            <th scope="row">{props.comment.id}</th>
            <td>{props.comment.author}</td>
            <td>{props.comment.text}</td>
            <td><button onClick={deleteOnClick}>delete</button></td>
        </tr>
    )
};

export default Comment;