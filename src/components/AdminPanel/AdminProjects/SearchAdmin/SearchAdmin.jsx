import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

const SearchAdmin = props => {
    let [search, setSearchField] = useState(props.search || '');

    const setSearchOnChange = (e) =>{
        setSearchField(e.currentTarget.value);
    };

    useEffect( () => {
        setSearchField(props.search);
    }, [props.search]);

    const onClickSearch = () =>{
        props.onClickSetSearch(search)
    };

    let path = '/projectsManager/' + 1 + '?search=' + search;
    if (search === ''){
        path = '/projectsManager/' + 1;
    }
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Recipient's username" aria-describedby="basic-addon2" value={search} onChange={setSearchOnChange}/>
                <div className="input-group-append">
                    <NavLink to={path}>
                        <button type="button" className="btn btn-success" onClick={onClickSearch}>Search</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
};

export default SearchAdmin;