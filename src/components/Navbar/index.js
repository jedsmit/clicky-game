import React from "react";
import Score from "../Score";

function Navbar() {
    return <nav className="navbar sticky-top navbar-light bg-light">

        <div class="col-sm-4">
            <a className="navbar-brand" href="/">GoatyGoatyGoatGoat</a>
        </div>

        <div class="col-sm-4">
            <h4>Click a goat to begin!</h4>
        </div>

        <div class="col-sm-4">
            <Score />
        </div>

    </nav >

};

export default Navbar;