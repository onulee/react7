import React from "react";
import { NavLink,Link } from "react-router-dom";

const Nav = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">HOME</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' aria-current="page" to="/mform">영화등록</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/mlist">영화리스트</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName='active' to="/users">회원리스트</NavLink>
                    </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
       
    )
}

export default Nav;