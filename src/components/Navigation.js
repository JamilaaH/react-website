import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Fragment>
            <nav>
                <span>Photosen</span>
                    <ul className="navig text-decoration-none">
                        <li>
                            <NavLink className="text-decoration-none " activeClassName="nav-active" to ="/" exact >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-decoration-none" activeClassName="nav-active" to ="/blog">
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-decoration-none" activeClassName="nav-active" to ="/services">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-decoration-none" activeClassName="nav-active" to ="/about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-decoration-none" activeClassName="nav-active" to ="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    
                <div className="reseaux">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </nav>        
        </Fragment>
    );
}

export default Navigation;