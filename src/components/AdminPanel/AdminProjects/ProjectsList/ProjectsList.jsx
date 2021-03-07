import React from 'react'
import SingleProject from './SingleProject/SingleProjects'

const ProjectsList = props =>{

    let projects = props.projects.map(el => <SingleProject key={el.id} state={el}/>);

    return (
        <div className="card">
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                        <div>
                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target='#Projects'
                                    aria-expanded="false" aria-controls="collapseTwo">
                                Projects
                            </button>
                        </div>
                    </h5>
                </div>
                <div id='Projects' className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        <div>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">img</th>
                                    <th scope="col">img2</th>
                                    <th scope="col">img3</th>
                                    <th scope="col">project</th>
                                    <th scope="col">title</th>
                                    <th scope="col">text</th>
                                    <th scope="col">work</th>
                                    <th scope="col"> </th>
                                </tr>
                                </thead>
                                <tbody>
                                {projects}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectsList