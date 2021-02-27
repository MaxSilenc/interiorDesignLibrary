import React from 'react';
import SingleProject from './SingleProject/SingleProject'


const ProjectsInWork = (props) =>{

    let projects = props.state.map(el => <SingleProject key={'project' + el.id} title={el.title}
                                                        img={el.img} img2={el.img2} img3={el.img3} link={el.name}
                                                        id={el.id}/>);

    return (
        <div>
            <h1>ProjectsInWork</h1>
            {projects}
        </div>
    )
};

export default ProjectsInWork;