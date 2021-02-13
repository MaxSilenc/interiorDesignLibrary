import React from 'react'

const Like = (props) =>{
    return (
        <div>
            <div>
                <div>likes: {props.likes.likeCount}</div>
                {props.user.isAuth ?
                    props.likes.like === 0 ?
                            <button>like</button>
                            :
                            <button>unlike</button>
                    :
                    <></>
                }
            </div>
        </div>
    )
};

export default Like