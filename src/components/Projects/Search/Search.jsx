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
        <div style={{paddingBottom: '5px', paddingTop: '5px'}}>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search"
                       aria-label="Recipient's username" aria-describedby="basic-addon2" value={searchField} onChange={setSearchOnChange}/>
                <div className="input-group-append">
                    <NavLink to={path}>
                        <button type="button" className="btn btn-success" onClick={onClickSearch}>Success</button>
                    </NavLink>
                </div>
            </div>
            {/*<input type="text" placeholder={'Search'} value={searchField} onChange={setSearchOnChange}/>*/}
            {/*<NavLink to={path}>*/}
            {/*    <button onClick={onClickSearch}>submit</button>*/}
            {/*</NavLink>*/}
        </div>
    )
};

export default Search;