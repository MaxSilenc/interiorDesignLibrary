import React from 'react'

const SingleProject = props =>{
    return (
        <tr>
            <th scope="row">{props.state.id}</th>
            <td><a href={'http://127.0.0.1:8000' + props.state.img}>link</a></td>
            <td><a href={'http://127.0.0.1:8000' + props.state.img2}>link</a></td>
            <td><a href={'http://127.0.0.1:8000' + props.state.img3}>link</a></td>
            <td><a href={"http://127.0.0.1:8000/media/Ue4Project/" + props.state.name + "/" + props.state.name + ".html"}>start</a></td>
            <td>{props.state.title}</td>
            <td>{props.state.text}</td>
            <td>{props.state.work.toString()}</td>
            <td><button>delete</button></td>
            <td><button>more</button></td>
        </tr>
    )
};

export default SingleProject;