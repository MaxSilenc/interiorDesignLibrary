import React from 'react';
import Styles from './projectBlock.module.css'

const ProjectBlock = (props) => {

    return(
        <div className={Styles.project}>
            <div className="card bg-dark text-white">
                <img className="" src="slide1.jpg" alt="Card image"/>
                    <div className="card-img-overlay">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <p className="card-text">{props.directLink}</p>
                        <a href="">start</a>
                    </div>
            </div>
        </div>
    )
};

export default ProjectBlock;