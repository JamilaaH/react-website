import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Fragment>
            <nav>
                <span>Photosen</span>
                    <div className="navig text-decoration-none">
                        <NavLink className="text-decoration-none " activeClassName="nav-active" to ="/" exact >
                            Home
                        </NavLink>
                        <div className="dropdown">
                        <button className="dropbtn">GALLERY 
                        <i className="fa fa-caret-down ml-1"></i>
                        </button>
                        <div className="dropdown-content bg-light ">
                            <NavLink className="text-decoration-none dropitem" activeClassName="nav-active" to ="/gallery1" exact>
                                gallery 1
                            </NavLink>
                            <NavLink className="text-decoration-none dropitem" activeClassName="nav-active" to ="/gallery2" exact>
                                gallery 2
                            </NavLink>
                        </div>
                        </div>

                        <NavLink className="text-decoration-none" activeClassName="nav-active" to ="/service">
                            Services
                        </NavLink>
                        <NavLink className="text-decoration-none" activeClassName="nav-active" to ="/about">
                            About
                        </NavLink>
                        <NavLink className="text-decoration-none" activeClassName="nav-active" to ="/contact">
                            Contact
                        </NavLink>
                    </div>
                    
                <div className="reseaux">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </nav>        
        </Fragment>
    );
}

export default Navigation;