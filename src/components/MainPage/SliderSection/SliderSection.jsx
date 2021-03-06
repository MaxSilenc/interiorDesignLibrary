import React from 'react';
import Styles from './sliderSection.module.css'
import Slide from './Slide/Slide'

const SliderSection = ({state}) => {
    return (
        <div className={Styles.slider}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <Slide {...state[0]} modify=' active'/>
                    <Slide {...state[1]} modify=''/>
                    <Slide {...state[2]} modify=''/>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
};

export default SliderSection;
