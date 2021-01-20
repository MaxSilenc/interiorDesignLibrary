import React from 'react';
import Styles from './comentBlock.module.css'
import CommentsFormContainer from './CommentsForm/CommentsFormContainer'
import CommentsListContainer from './CommentsList/CommentsListContainer'


const CommentsBlock = (props) => {
    return (
        <div className="card">
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target='#1'
                                aria-expanded="false" aria-controls="collapseTwo">
                            Comments
                        </button>
                    </h5>
                </div>
                <div id='1' className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        <CommentsListContainer/>
                        <CommentsFormContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CommentsBlock;