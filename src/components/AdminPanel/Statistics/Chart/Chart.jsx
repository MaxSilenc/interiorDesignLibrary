import React, {useState} from 'react';
import {Bar, Line, Pie} from "react-chartjs-2";
import Styles from './chart.module.css'

const Chart = props =>{
    let [ofWhat, setOfWhat] = useState(props.data.likes);
    let [names, setName] = useState(props.data.name);
    let [label, setLabel] = useState('# of likes');

    const ofLikes = () =>{
        setOfWhat(props.data.likes);
        setLabel('# of likes')
    };
    const ofComments = () =>{
        setOfWhat(props.data.comments);
        setLabel('# of comments')
    };

    let data = {
        labels: names,
        datasets: [{
            label: label,
            data: ofWhat,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderWidth: 1
        }]
    };

    return (
        <div className={Styles.main}>
            <div className={Styles.buttons}>
                <button type="button" className="btn btn-info" onClick={ofLikes}>of likes</button>
                <button type="button" className="btn btn-info" onClick={ofComments}>of comments</button>
            </div>
            <div className={'chart'}>
                <Bar
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: props.name,
                            fontSize: '14'
                        },
                        legend: {
                            display: true,
                            position: 'right',
                        }
                    }}
                />
            </div>
        </div>
    )
};

export default Chart;
