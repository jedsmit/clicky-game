import React, { Component } from "react";
import Score from "../Score";

class Navbar extends Component {

    render() {
        return (<nav className="navbar sticky-top navbar-light bg-light" >

            <div className="col-sm-4">
                <a className="navbar-brand" href="/">GoatyGoatyGoatGoat</a>
            </div>

            <div className="col-sm-4">
                <h5>{this.props.message}</h5>
            </div>

            <div className="col-sm-4">
                <Score score={this.props.score} topScore={this.props.topScore} />
            </div>

        </nav >)
    };
};

export default Navbar;