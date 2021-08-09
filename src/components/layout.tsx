import React from "react";
import Footer from "./footer";
import Header from "./header";
import Content from "./content";
import '../css/main.css'

function Layout() {

    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}

export default Layout;