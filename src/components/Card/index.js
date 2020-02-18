import React from "react";
import images from '../images/goats.json';


function Card() {
    return (
        <div>{
            images.map((goat) => {
                return (< img key={goat.id} className="img img-thumbnail" src={require(goat.image + ".jpg")} alt={goat.name}></img>)
            })
        }
        </div>
    )
};

export default Card;