import React from 'react';
import Styles from './adminPanel.module.css'

const AdminPanel = (props) => {

    let newProjectText = React.createRef();
    let newProjectTitle = React.createRef();

    let addProject = () => {
        let title = newProjectTitle.current.value;
        let text = newProjectText.current.value;
        props.addProject(title, text);
    };

    return (
        <div className={Styles.adminPanel}>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="title" ref={newProjectTitle}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">text</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="text" ref={newProjectText}/>
                </div>
                <button className="btn btn-primary" type="button" onClick={addProject}>Submit</button>
            </form>
        </div>
    )
};

export default AdminPanel;