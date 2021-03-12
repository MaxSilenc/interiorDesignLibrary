import React from 'react'
import imgModern from './../../../img/n.jpg'
import Styles from './directions.module.css'

const Diractions = props =>{

    return (
        <div className={Styles.main}>
            <div className={Styles.title}>
                <h2>Some of our works</h2>
            </div>
            <div className={Styles.wrapper}>
                <div className={Styles.block}>
                    <div className={Styles.block__inner}>
                        <img src={imgModern} className={Styles.image}/>
                    </div>
                </div>
                <div className={Styles.block}>
                    <div className={Styles.block__inner}>
                        <img src={imgModern} className={Styles.image}/>
                    </div>
                </div>
                <div className={Styles.block}>
                    <div className={Styles.block__inner}>
                        <img src={imgModern} className={Styles.image}/>
                    </div>
                </div>
                <div className={Styles.block}>
                    <div className={Styles.block__inner}>
                        <img src={imgModern} className={Styles.image}/>
                    </div>
                </div>
                <div className={Styles.block}>
                    <div className={Styles.block__inner}>
                        <img src={imgModern} className={Styles.image}/>
                    </div>
                </div>
                <div className={Styles.block}>
                    <div className={Styles.block__inner}>
                        <img src={imgModern} className={Styles.image}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Diractions;