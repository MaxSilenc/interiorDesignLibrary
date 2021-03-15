import React from 'react'
import Styles from './../ProjectsInWork.module.css'

const SingleProject = props =>{

    return (
        <div className={Styles.project}>
            <div className="card">
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h5 className="mb-0">
                            <div>
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target={'#' + props.id}
                                        aria-expanded="false" aria-controls="collapseTwo">
                                    {props.title}
                                </button>
                            </div>
                            <div>
                                <button className="btn btn-link collapsed"
                                        aria-expanded="false" aria-controls="collapseTwo">
                                    <a href={"http://127.0.0.1:8000/media/Ue4Project/" + props.name + "/" + props.name + ".html"}>start</a>
                                </button>
                            </div>
                        </h5>
                    </div>
                    <div id={props.id} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <img src={'http://127.0.0.1:8000' + props.img}  alt="" className={Styles.img}/>
                            <img src={'http://127.0.0.1:8000' + props.img2} alt="" className={Styles.img}/>
                            <img src={'http://127.0.0.1:8000' + props.img3} alt="" className={Styles.img}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SingleProject;