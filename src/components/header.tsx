import React from "react";
import '../css/main.css'
import Navigation from "./nav/navigation";
import MobileNavigation from "./nav/mobileNavigation";


function Header() {

    return(
        <div className="header-section header-size flex column">            
            <div className="logo flex flex-1 center">
                <h2><a href="/">Some forms</a></h2>
            </div>
            <div className="navigation-container">
                <Navigation />
                <MobileNavigation />
            </div>
        </div>
    )
}

export default Header;