import React from 'react';
import headerStyles from './header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
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
                                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/adminPanel">Admin Panel</NavLink>
                            </li>
                            {props.state.isAuth ?
                                <li className="nav-item" onClick={props.logout}>
                                    <NavLink className="nav-link" to="/">logout, {props.state.login}</NavLink>
                                </li>
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">login</NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
