/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export class Nav extends React.Component {

    render(){
        return(
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-nav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="/add-contact">{this.props.register} <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="/">Show Record</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}