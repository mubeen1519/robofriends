import React from "react";


const Card = (props) => {
    const {name , email , id} = props;
    return (
        <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5">
            <img alt = "Robots" src={`https://robohash.org/${id}test?size=150x150`}></img>
            <div>
            <h3>{name}</h3>
            <p> {email}</p>
            </div>
        </div>
    );
}

export default Card;