import React from 'react';
import Styles from './ImgBlock.module.css'

const ImgBlock = ({state}) =>{
    return (
        <div>
            <div className="card bg-dark text-white">
                <img className={Styles.img} src={'http://127.0.0.1:8000' + state.img} alt="Card image"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">{state.title}</h5>
                    <p className="card-text">{state.text}</p>
                    <a href={"http://127.0.0.1:8000/media/Ue4Project/" + state.name + "/" + state.name + ".html"}>start</a>
                </div>
            </div>
        </div>
    );
};

export default ImgBlock;