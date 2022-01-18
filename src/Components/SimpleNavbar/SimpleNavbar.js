import React from 'react';
import { Link } from 'react-router-dom';
import './SimpleNavbar.css';

function SimpleNavbar() {
    // Clicking on a navbar tab forces a refresh, which runs 'window.onload()'. Forces toggle button to be in activated position or not.
    function forceRefresh(e) {
        window.location.href(e.Link).reload();
    }

    // Finds whether pre-reload 'data-theme' was light or dark, then renders that theme.
    const x = localStorage.getItem("data-theme");
    console.log(x);
    if (x === "light") {
        document.documentElement.setAttribute("data-theme", "light");
    }
    else {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    return (
        <div className='SimpleNavbar'>
            <ul className='grid-container'>
                <li><Link to="/" onClick={forceRefresh}>About</Link></li>
                <li><Link to="/home" onClick={forceRefresh}>Home</Link></li>
                <li><Link to="/guides" onClick={forceRefresh}>Guides</Link></li>
                <li><Link to="/tasks" onClick={forceRefresh}>Tasks</Link></li>
            </ul>
        </div>
    );
}

export default SimpleNavbar;
