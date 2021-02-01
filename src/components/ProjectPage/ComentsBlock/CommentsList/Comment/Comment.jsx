import React from 'react';
import Styles from './comment.module.css'

class Comment extends React.Component{

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    };

    render(){
        return (
            <div>
                {(this.props.user === this.props.author) ?
                    <div>
                        <div className={Styles.me}>{this.props.author}:</div>
                        {!this.state.editMode &&
                        <div onDoubleClick={this.activateEditMode}>
                            {this.props.text}
                        </div>
                        }
                        {this.state.editMode &&
                        <div>
                            <textarea autoFocus={true} onBlur={this.deactivateEditMode} name="" id="" cols="50" rows="4"
                                      value={this.props.text}/>
                        </div>
                        }
                    </div>
                    :
                    <div>
                        <div>{this.props.author}:</div>
                        <div>{this.props.text}:</div>
                    </div>
                }
            </div>
        );
    }
};

export default Comment