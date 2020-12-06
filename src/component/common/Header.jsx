import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
                <div>
                    {/* <!-- ***** Preloader Start ***** --> */}
                        {/* <div id="preloader">
                            <div class="jumper">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>   */}
                        {/* <!-- ***** Preloader End ***** --> */}

                        {/* <!-- Header --> */}
                        <header class="">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container">
                            <a class="navbar-brand" href="index.html"><h2>Stand Blog<em>.</em></h2></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link" to='/'>Home
                                    
                                    </Link>
                                </li> 
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>
                        </header>
                </div>

        )
    }
}

export default Header
