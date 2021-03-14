import React from 'react'
import SingleProject from './SingleProject/SingleProjects'
import SearchAdmin from './../SearchAdmin/SearchAdmin'
import Styles from './ProjectsList.module.css'
import Paginator from "../../../common/Paginator/Paginator";

const ProjectsList = props =>{
    let projects = props.projects.map(el => <SingleProject key={el.id} state={el} deleteProject={props.deleteProject}/>);

    return (
        <div className={Styles.main}>
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
                                <div>
                                    <SearchAdmin search={props.search} nowPage={props.page} onClickSetSearch={props.onClickSetSearch}/>
                                </div>
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
                            <div className={Styles.pagination}>
                                <Paginator totalItemsCount={props.count}
                                           pageSize={10}
                                           currentPage={props.page}
                                           onPageChange={props.onClickSetPage}
                                           portionSize={5}
                                           url={'/projectsManager/'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectsList