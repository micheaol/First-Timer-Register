/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Nav.css';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {

    render(){
        return(
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-nav">
               
                <div id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-contact">{this.props.register} <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="/">Show Record</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}

