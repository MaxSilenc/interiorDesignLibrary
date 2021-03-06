import React from 'react'
import SingleElement from './SingleElement/SingleElment'
import Styles from './TTLists.module.css'

const ThemesList = props =>{

    let themes = props.themes.map(el => <SingleElement key={el.id} state={el} updateThis={props.updateTheme} whatIsIt={'themes'}/>);

    return (
        <div className={Styles.main}>
            <div className="card">
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <div>
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target='#Themes'
                                        aria-expanded="false" aria-controls="collapseTwo">
                                    Themes
                                </button>
                            </div>
                        </h5>
                    </div>
                    <div id='Themes' className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <div>
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">name</th>
                                        <th scope="col"> </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {themes}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ThemesList