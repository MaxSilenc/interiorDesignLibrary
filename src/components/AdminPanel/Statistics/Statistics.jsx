import React from 'react'
import Chart from  './Chart/Chart'
import Styles from './Statistics.module.css'
const Statistics = props =>{

    return (
        <div className={Styles.main}>
            <div className={Styles.h2__line}>
                <h2 className={Styles.h2}>Statistics</h2>
            </div>
            <Chart data={props.stat.types} name={'Types'}/>
            <br/>
            <Chart data={props.stat.directions} name={'Diractions'}/>
            <br/>
            <Chart data={props.stat.projects} name={'Projects'}/>
        </div>
    )
};

export default Statistics;