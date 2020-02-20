import React, { Component } from "react";


class Score extends Component {
    render() {
        return (
            <span>Score: {this.props.score} | Top Score: {this.props.topScore}</span >
        )
    };
};

export default Score;