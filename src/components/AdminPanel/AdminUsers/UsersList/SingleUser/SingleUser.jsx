import React from 'react'

const SingleUser = props => {

    const deleteOnClick = () =>{
        props.deleteUser(props.user.userId)
    };

    return (
        <tr>
            <th scope="row">{props.user.userId}</th>
            <td>{props.user.login}</td>
            <td>{props.user.email}</td>
            <td>{props.user.name}</td>
            <td>{props.user.lastName}</td>
            <td>{props.user.status.toString()}</td>
            <td><button type="button" className="btn btn-danger" onClick={deleteOnClick}>delete</button></td>
        </tr>
    )
};

export default SingleUser;