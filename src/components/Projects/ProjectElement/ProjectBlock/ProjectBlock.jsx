import React from 'react';
import Styles from './projectBlock.module.css'
import {NavLink} from "react-router-dom";

const ProjectBlock = ({img, title, text, id}) => {

    return(
        <div className={Styles.project}>
            <div className="card bg-dark text-white">
                <img className="" src={'http://127.0.0.1:8000' + img} alt="Card image"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <NavLink to={"/projectPage/" + id}>start</NavLink>
                    </div>
            </div>
        </div>
    )
};

export default ProjectBlock;