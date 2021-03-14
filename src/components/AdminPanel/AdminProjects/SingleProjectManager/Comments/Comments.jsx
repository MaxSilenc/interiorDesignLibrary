import React from 'react'
import Comment from './Comment/Comment'
import Styles from './Comments.module.css'

import Paginator from './../../../../common/Paginator/Paginator'

const Comments = props =>{

    let comments = props.comments.map(el => <Comment comment={el} key={el.id} updateComment={props.updateComment}
                                                     projectId={props.projectId}/>);


    return (
        <div className={Styles.main}>
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>Comments</h2>
            </div>
            <div className={Styles.comments}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">author</th>
                        <th scope="col">message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {comments}
                    </tbody>
                </table>
                <div className={Styles.pagination}>
                    <Paginator totalItemsCount={props.count} pageSize={20} currentPage={props.nowPage}
                               onPageChange={props.getCommentsForCurrProject} portionSize={5} projectId={props.projectId}/>
                </div>
            </div>
        </div>
    )
};


export default Comments;