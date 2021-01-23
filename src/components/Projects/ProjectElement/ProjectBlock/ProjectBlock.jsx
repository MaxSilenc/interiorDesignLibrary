import React from 'react';
import Styles from './projectBlock.module.css'
import {NavLink} from "react-router-dom";

const ProjectBlock = (props) => {

    return(
        <div className={Styles.project}>
            <div className="card bg-dark text-white">
                <img className="" src={'http://127.0.0.1:8000' + props.img} alt="Card image"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <p className="card-text">{props.directLink}</p>
                        <a href={"http://127.0.0.1:8000/media/Ue4Project/" + props.name + "/" + props.name + ".html"}>start</a>
                    </div>
            </div>
        </div>
    )
};

export default ProjectBlock;