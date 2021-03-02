import React from 'react'
import SingleProject from './SingleProject/SingleProjects'

const ProjectsList = props =>{

    let projects = props.projects.map(el => <SingleProject key={el.id} state={el}/>);

    return (
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
    )
};

export default ProjectsList