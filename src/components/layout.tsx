import React from "react";
import Footer from "./footer";
import Header from "./header";
import Username from "./username";
import Practice from "./practice";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import '../css/main.css'

function Layout() {

    return (
        <>
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Practice} />
                        <Route path="/username" component={Username} />
                    </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default Layout;