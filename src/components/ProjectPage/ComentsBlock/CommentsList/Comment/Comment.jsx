import React from 'react';
import Styles from './comment.module.css'

class Comment extends React.Component{

    state = {
        editMode: false,
        comment: {
            id: this.props.id,
            project_id: this.props.project_id,
            author: this.props.author,
            text: this.props.text
        }
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateComment(this.state.comment.id, this.state.comment.text)
    };

    setCommentInLS = (e) => {
        this.setState({
            comment: {
                id: this.props.id,
                project_id: this.props.project_id,
                author: this.props.author,
                text: e.currentTarget.value
            }
        })
    };

    render(){
        return (
            <div>
                {(this.props.user === this.state.comment.author) ?
                    <div>
                        <div className={Styles.me}>{this.state.comment.author}:</div>
                        {!this.state.editMode &&
                        <div onDoubleClick={this.activateEditMode}>
                            {this.state.comment.text}
                        </div>
                        }
                        {this.state.editMode &&
                        <div>
                            <textarea autoFocus={true} onBlur={this.deactivateEditMode} name="" id="" cols="50" rows="4"
                                      value={this.state.comment.text} onChange={this.setCommentInLS}/>
                        </div>
                        }
                    </div>
                    :
                    <div>
                        <div>{this.state.comment.author}:</div>
                        <div>{this.state.comment.text}:</div>
                    </div>
                }
            </div>
        );
    }
};

export default Comment