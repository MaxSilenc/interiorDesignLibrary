import React from 'react'
import {NavLink} from "react-router-dom";

const SingleProject = props =>{

    const onClickDelete = () =>{
        props.deleteProject(props.state.id, 'delete')
    };

    return (
        <tr>
            <th scope="row">{props.state.id}</th>
            <td><a href={'http://127.0.0.1:8000' + props.state.img}>link</a></td>
            <td><a href={'http://127.0.0.1:8000' + props.state.img2}>link</a></td>
            <td><a href={'http://127.0.0.1:8000' + props.state.img3}>link</a></td>
            <td><a href={"http://127.0.0.1:8000/media/Ue4Project/" + props.state.name + "/" + props.state.name + ".html"}>start</a></td>
            <td>{props.state.title}</td>
            <td>{props.state.text.slice(0, 50) + '...'}</td>
            <td>{props.state.work.toString()}</td>
            <td><button onClick={onClickDelete} className="btn btn-danger">delete</button></td>
            <td><NavLink to={'/singleProjectPage/' + props.state.id + '/' + 1} ><button className="btn btn-info">more</button></NavLink></td>
        </tr>
    )
};

export default SingleProject;
