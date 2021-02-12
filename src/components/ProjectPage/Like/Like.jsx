import React from 'react'

const Like = (props) =>{
    return (
        <div>
            <div>
                <div>likes: {props.likes.likeCount}</div>
                <button>like</button>
            </div>
        </div>
    )
};

export default Like