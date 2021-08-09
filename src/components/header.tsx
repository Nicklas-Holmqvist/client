import React from "react";
import '../css/main.css'

function Header() {

    return(
        <div className="header-section header-size flex column">            
            <div className="logo flex flex-1 center">
                <h2><a href="/">Some forms</a></h2>
            </div>
            <div className="forms flex center">
                <ul className="flex center">
                    <li><a href="/username">Username</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;