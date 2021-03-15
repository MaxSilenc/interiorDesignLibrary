import React, {useState, useEffect} from 'react';
import Styles from './comment.module.css'

const CommentContainer = (props =>{
    let [editMode, setEditMode] = useState(false);
    let [comment, setComment] = useState({
        id: props.id,
        project_id: props.project_id,
        author: props.author,
        text: props.text
    });

    useEffect( () => {
        setComment({
            id: props.id,
            project_id: props.project_id,
            author: props.author,
            text: props.text
        })
    }, [props.text, props.author, props.project_id, props.id]);

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateComment(comment.id, comment.text, comment.project_id)
    };

    const setCommentInLS = (e) => {
        setComment({
            id: props.id,
            project_id: props.project_id,
            author: props.author,
            text: e.currentTarget.value
        })
    };
    return (
        <div>
            {(props.user === comment.author) ?
                <div className={Styles.block}>
                    <div className={Styles.message} >
                        <div className={"alert alert-success"}  style={{ borderRadius: '15px'}}>
                            <div className={Styles.author}>
                                <div>
                                    {comment.author}
                                </div>
                            </div>
                            {!editMode &&
                            <div onDoubleClick={activateEditMode}>
                                {comment.text}
                            </div>
                            }
                            {editMode &&
                            <div>
                            <textarea autoFocus={true} onBlur={deactivateEditMode}
                                      name="" id="" cols="50" rows="4"
                                      value={comment.text} onChange={setCommentInLS} className="form-control"/>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                :
                <div className={Styles.message}>
                    <div className={"alert alert-info"} style={{ borderRadius: '15px'}}>
                        <div className={Styles.author}>{comment.author}</div>
                        <div>{comment.text}</div>
                    </div>
                </div>
            }
        </div>
    );

});

export default CommentContainer