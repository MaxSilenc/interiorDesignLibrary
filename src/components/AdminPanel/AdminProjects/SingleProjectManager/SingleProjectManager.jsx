import React from 'react';
import UpdateProjectInfo from './updateProjectInfo/UpdateProjectInfo'
import Comments from './Comments/Comments'
import Styles from './SingleProject.module.css'

const SingleProjectManager = props =>{
    return (
        <div className={Styles.main}>
            <UpdateProjectInfo updateProject={props.updateProject} currProject={props.currProject}/>
            <Comments comments={props.comments} updateComment={props.updateComment}
                      projectId={props.currProject.id} count={props.count} getCommentsForCurrProject={props.getCommentsForCurrProject}/>
        </div>
    )
};

export default SingleProjectManager;