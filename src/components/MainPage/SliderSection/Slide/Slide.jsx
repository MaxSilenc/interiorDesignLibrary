import React from 'react';
import Styles from './slide.module.css'
import {NavLink} from "react-router-dom";

const Slide = (props) => {
    return (
        <div className={'carousel-item' + props.modify + ' ' + Styles.slide}>
            <img className={'d-block w-100' + Styles.slideImg} src={'http://127.0.0.1:8000' + props.img} alt="First slide"/>
            <div className={"carousel-caption d-md-block" + Styles.caption}>
                <div className={Styles.caption}>
                    <h5>{props.title}</h5>
                    <p>{props.text}</p>
                    <NavLink to={"projectPage/" + props.id}>start</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Slide;