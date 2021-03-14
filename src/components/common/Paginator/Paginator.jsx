import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize, projectId=''}) =>{

    let pageCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++){
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}
                                          className={"btn btn-outline-secondary"}> {'<'} </button>}

            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((p) => {
                    if (p.toString() === currentPage)
                        return (
                            <NavLink to={'/singleProjectPage/' + projectId + '/' + p} key={p}>
                                <button onClick={() => {onPageChange(projectId, p);}}
                                        className={"btn btn-outline-info"}>
                                    {p}
                                </button>
                            </NavLink>
                        );
                    else
                        return (
                            <NavLink to={'/singleProjectPage/' + projectId + '/' + p} key={p}>
                                <button onClick={() => {onPageChange(projectId, p);}}
                                        className={"btn btn-outline-dark"}>
                                    {p}
                                </button>
                            </NavLink>
                        )
                })
            }

            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}
                                                     className={"btn btn-outline-secondary"}> {'>'} </button>}
        </div>
    )
};

export default Paginator