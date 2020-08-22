import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="sticky">
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <h2 className="navbar mr-5">(React) Google Books Search</h2>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#"><h4>Search</h4><span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item mr-3">
                        <a className="nav-link" href="#"><h4>Saved</h4></a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar
