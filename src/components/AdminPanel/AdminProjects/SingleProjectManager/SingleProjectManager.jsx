import React from 'react';
import UpdateProjectInfo from './updateProjectInfo/UpdateProjectInfo'
import Comments from './Comments/Comments'

const SingleProjectManager = props =>{
    return (
        <div>
            <h1>single project</h1>
            <UpdateProjectInfo updateProject={props.updateProject} currProject={props.currProject}/>
            <Comments comments={props.comments} updateComment={props.updateComment}
                      projectId={props.currProject.id}/>
        </div>
    )
};

export default SingleProjectManager;