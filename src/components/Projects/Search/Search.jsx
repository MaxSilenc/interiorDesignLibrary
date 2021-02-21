import React, {useState, useEffect} from 'react';
import {NavLink} from "react-router-dom";

const Search = props => {
    let [searchField, setSearchField] = useState(props.search);

    const setSearchOnChange = (e) =>{
        setSearchField(e.currentTarget.value);
    };

    useEffect( () => {
        setSearchField(props.search);
    }, [props.search]);

    const onClickSearch = () =>{
        props.onClickSetSearch(props.nowTheme, props.nowType, searchField)
    };

    let path = "/projects/" + props.nowTheme + "/" + props.nowType + "/" + props.nowPage + '?search=' + searchField;
    if (searchField === ''){
        path = "/projects/" + props.nowTheme + "/" + props.nowType + "/" + props.nowPage;
    }
    return (
        <div>
            <input type="text" placeholder={'Search'} value={searchField} onChange={setSearchOnChange}/>
            <NavLink to={path}>
                <button onClick={onClickSearch}>submit</button>
            </NavLink>
        </div>
    )
};

export default Search;