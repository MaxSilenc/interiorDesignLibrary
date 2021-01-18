import React from 'react';
import Styles from './slide.module.css'

const Slide = (props) => {
    return (
        <div className={'carousel-item' + props.modify + ' ' + Styles.slide}>
            <img className={'d-block w-100' + Styles.slideImg} src="slide1.jpg" alt="First slide"/>
            <div className={"carousel-caption d-md-block" + Styles.caption}>
                <div className={Styles.caption}>
                    <h5>{props.text_h5}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, nam?</p>
                    <a href="#" className={Styles.caption__link}>more</a>
                </div>
            </div>
        </div>
    )
};

export default Slide;