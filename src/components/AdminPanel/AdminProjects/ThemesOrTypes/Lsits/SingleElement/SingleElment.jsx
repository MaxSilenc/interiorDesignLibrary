import React, {useEffect, useState} from 'react'

const SingleElement = props =>{
    let [editMode, setEditMode] = useState(false);
    let [name, setName] = useState(props.state.name);


    const onClickDelete = () =>{
        props.updateThis(props.whatIsIt, props.state.id, '')
    };

    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateThis(props.whatIsIt, props.state.id, name)
    };

    const setNameInLS = (e) => {
        setName(e.currentTarget.value)
    };

    return (
        <tr>
            <th scope="row">{props.state.id}</th>
            {!editMode &&
            <td onDoubleClick={activateEditMode}>{name}</td>
            }
            {editMode &&
                <td><input autoFocus={true} onBlur={deactivateEditMode} value={name} onChange={setNameInLS}/></td>
            }
            <td><button onClick={onClickDelete} className={"btn btn-danger"}>delete</button></td>
        </tr>
    )
};

export default SingleElement;
