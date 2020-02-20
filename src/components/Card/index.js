import React, { Component } from "react";



class Card extends Component {
    render() {
        return (
            < img key={this.props.key} id={this.props.id} className={this.props.className} src={this.props.src} alt={this.props.alt} onClick={this.props.onClick}></img>
        )
    };
};
export default Card;