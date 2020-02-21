import React from "react";
import "../Title/index.css"

function Title() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container-fluid">
                <h1 className="display-4">GoatyGoatyGoatClick</h1>
                <p>A Memory Game</p>
                <p>Click all twelve goats without clicking the same one twice.</p>
            </div>
        </div>)
};

export default Title;