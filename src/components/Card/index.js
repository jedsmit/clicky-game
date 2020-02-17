import React from "react";
import images from '../../assets/images/goats.json';


function Card() {
    return (
        <img className="img img-thumbnail" src={require(images[0].image + ".jpg")} alt={images[0].name}></img>
    )
};

export default Card;