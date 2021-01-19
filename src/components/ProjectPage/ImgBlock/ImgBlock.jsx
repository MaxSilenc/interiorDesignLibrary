import React from 'react';
import Styles from './ImgBlock.module.css'

const ImgBlock = (props) =>{
    return (
        <div>
            <div className="card bg-dark text-white">
                <img className={Styles.img} src="/slide1.jpg" alt="Card image"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">title</h5>
                    <p className="card-text">text</p>
                    <p className="card-text">directLink</p>
                </div>
            </div>
        </div>
    );
};

export default ImgBlock;