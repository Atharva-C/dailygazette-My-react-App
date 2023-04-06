import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid">
                        <Link class="navbar-brand" to="/">The Daily Gazette</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item"><Link class="nav-link" aria-current="page" to="/">Home</Link></li>
                                <li class="nav-item"><Link class="nav-link" aria-current="page" to="/business">business</Link></li>
                                <li class="nav-item"><Link class="nav-link" aria-current="page" to="/entertainment">entertainment</Link></li>
                                <li class="nav-item"><Link class="nav-link" aria-current="page" to="/health">health</Link></li>
                                <li class="nav-item"><Link class="nav-link" aria-current="page" to="/science">science</Link></li>
                                <li class="nav-item"><Link class="nav-link" aria-current="page" to="/sports">sports</Link></li>
                                <li class="nav-item"><Link class="nav-link" aria-current="page" to="/technology">technology</Link></li>
                            </ul>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
