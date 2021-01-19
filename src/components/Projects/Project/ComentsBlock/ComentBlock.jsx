import React from 'react';
import Styles from './comentBlock.module.css'
import CommentsForm from './CommentsForm/CommenstForm'
import CommentsList from './CommentsList/CommentsList'


const CommentsBlock = (props) => {
    return (
        <div className="card">
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target={"#" + props.projectId}
                                aria-expanded="false" aria-controls="collapseTwo">
                            Comments
                        </button>
                    </h5>
                </div>
                <div id={props.projectId} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        <CommentsList state={props.state}/>
                        <CommentsForm/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CommentsBlock;