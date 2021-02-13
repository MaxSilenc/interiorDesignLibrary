import React from 'react'

const Like = (props) =>{

    const setLike = () =>{
        props.setLike(props.project_id, props.user.login, 'add')
    };

    const delLike = () =>{
        props.setLike(props.project_id, props.user.login, 'del')
    };

    return (
        <div>
            <div>
                <div>likes: {props.likes.likeCount}</div>
                {props.user.isAuth ?
                    props.likes.like === 0 ?
                            <button onClick={setLike}>like</button>
                            :
                            <button onClick={delLike}>unlike</button>
                    :
                    <></>
                }
            </div>
        </div>
    )
};

export default Like