import React from "react";
import '../css/main.css'

function Header() {

    return(
        <div className="header-section header-size flex">
            <div className="menu-btn flex flex-1 left">
                logga
            </div>
            <div className="logo flex flex-1 center">
                <h3>Glömd värld</h3>
            </div>
            <div className="social-icons flex flex-1 right">
                <ul className="flex center">
                    <li>F</li>
                    <li>I</li>
                    <li>M</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;