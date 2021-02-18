import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./../../Assets/images/logo.png";
import "./Footer.css";

export default function Footer() {
    return (
        <Router>
            <nav class="navbar navbar-expand-lg navbar-light py-0">
                <Link class="navbar-brand" href="/">
                    <img src={logo} id="logo" class="mr-auto" alt="" />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto ">
                        <li class="nav-item">
                            <Link to="/" id="" class="nav-link">
                                Home
              </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" id="" class="nav-link">
                                Create CV
              </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" id="" class="nav-link">
                                Search Job
              </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" id="" class="nav-link">
                                Pricing
              </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" id="" class="nav-link">
                                Contact
              </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="second-nav">
                <ul>
                    <li>
                        <Link to="" className="policy">
                            Copyright &#64; 2021 Website
            </Link>
                    </li>
                    <li>
                        <Link to="" className="policy">
                            Terms of Use
            </Link>
                    </li>
                    <li>
                        <Link to="" className="policy">
                            Privacy Policy
            </Link>
                    </li>
                </ul>
                <ul id="social-list">
                    <li>
                        <Link to="" className="policy">
                            <i class="fab fa-facebook-f" />
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="policy">
                            <i class="fab fa-twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="policy">
                            <i class="fab fa-linkedin-in" />
                        </Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
}