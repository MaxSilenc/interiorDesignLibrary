import React from 'react'

const SingleChat = props =>{

    const onClickUser = () =>{
        props.takeChat(props.id, props.adminname)
    };

    return (
        <tr>
            <td>{props.user}</td>
            <td><button onClick={() => onClickUser()} className={"btn btn-info"}>take</button></td>
        </tr>
    )
};

export default SingleChat