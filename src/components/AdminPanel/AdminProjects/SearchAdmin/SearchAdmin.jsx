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
            <input type="text" placeholder={'Search'} value={search} onChange={setSearchOnChange}/>
            <NavLink to={path}>
                <button onClick={onClickSearch}>submit</button>
            </NavLink>
        </div>
    )
};

export default SearchAdmin;