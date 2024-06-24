import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import './HomePage.css';
import Github from "./GithubLogoDark.png";
import linkedin from "./LI-In-Bug.png";

const Header = () => {

    return (
        <header>
            <h1 id="titleH">Ali Toghani</h1>
            <ul id="navU">
                <a href="https://www.linkedin.com/in/alitoghani/">
                    <img id="img1" src={Github} alt="" />
                </a>
                <a href="https://github.com/AliToghani82">
                    <img id="img2" src={linkedin} alt="" />
                </a>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </ul>
            <Outlet />
        </header>
    )
};

export default Header;
