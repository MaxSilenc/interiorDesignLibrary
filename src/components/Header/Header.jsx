import React from 'react';
import headerStyles from './header.module.css'
import {NavLink} from "react-router-dom";


const Header = ({state, logout, getProjectsOnClick, myChat}) => {
    return (
        <header className={headerStyles.header}>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects/all/all/1" onClick={() => getProjectsOnClick()}>Projects</NavLink>
                            </li>
                            {state.isAuth ?
                                <li className="nav-item" onClick={logout}>
                                    <NavLink className="nav-link" to="/">logout, {state.login}</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">login</NavLink>
                                </li>
                            }
                            {state.status ?
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/admin"}>admin</NavLink>
                                </li>
                                :
                                state.isAuth ?
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/personalArea">Personal area</NavLink>
                                    </li>
                                    :
                                    true
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
