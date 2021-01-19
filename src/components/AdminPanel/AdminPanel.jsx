import React from 'react';
import Styles from './adminPanel.module.css'


const AdminPanel = (props) => {
    let newProjectText = React.createRef();
    let newProjectTitle = React.createRef();
    let newProjectDirectLink = React.createRef();

    let addProject = () => {
        props.addProject();
    };

    let onProjectChange = () => {
        let title = newProjectTitle.current.value;
        let text = newProjectText.current.value;
        let directLink = newProjectDirectLink.current.value;
        console.log(text, title, directLink);
        props.updateNewProject(text, title, directLink);
    };

    return (
        <div className={Styles.adminPanel}>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="title" ref={newProjectTitle} onChange={onProjectChange} value={props.state.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">text</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="text"
                           ref={newProjectText} onChange={onProjectChange} value={props.state.text}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail12">directLink</label>
                    <input type="text" className="form-control" id="exampleInputEmail12" aria-describedby="emailHelp"
                           placeholder="directLink" ref={newProjectDirectLink} onChange={onProjectChange} value={props.state.directLink}/>
                </div>
                <button className="btn btn-primary" type="button" onClick={addProject}>Submit</button>
            </form>
        </div>
    )
};

export default AdminPanel;