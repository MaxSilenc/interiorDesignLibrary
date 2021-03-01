import React from 'react'

const SingleChat = props =>{

    const onClickUser = () =>{
        props.takeChat(props.id, props.adminname)
    };

    return (
        <div>
            {props.user} <button onClick={() => onClickUser()}>take</button>
        </div>
    )
};

export default SingleChat