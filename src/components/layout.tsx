import React from "react";
import Footer from "./footer";
import Header from "./header";
import '../css/main.css'

function Layout() {

    return (
        <>
            <Header />
            <div className="content">
                <h1>Layout?</h1>
            </div>
            <Footer />
        </>
    );
}

export default Layout;