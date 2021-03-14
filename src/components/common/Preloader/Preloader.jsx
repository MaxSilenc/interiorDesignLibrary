import React from 'react'
import preloader from './../../../img/preloader.gif'
import Styles from './preloader.module.css'

const Preloader = () => {
    return (
        <div className={Styles.bg}>
            <div className={Styles.main}>
                <img src={preloader} alt=""/>
            </div>
        </div>
    )
};

export default Preloader;