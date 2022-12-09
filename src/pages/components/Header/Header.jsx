import React from 'react';
import { Link } from "react-router-dom";

import './Header.css'

export default function Header(props) {

    //Page
    return (
        <header id="headerBody">
            <Link to="/" id="homeRoute">
                <img className="logo" src="https://media-exp1.licdn.com/dms/image/C4E0BAQGp0TL3Q5nkfg/company-logo_200_200/0/1643208296467?e=2159024400&v=beta&t=hZal7omQfkX_L0IyREYrJxwy9fBeMKqdSOrnzqSORwk" alt="Logo" />
            </Link>
            {props.buttons}
        </header>
    )
}