import React from "react";

export default function Episode(props){
    
    return(
        <div className="Episode">
            <h1>Episode</h1>
            <p>Episode: {props.episode}</p>
            <p>Name: {props.name}</p>
            <h3>LaCosa: {props.cosa}</h3>
            <img src={props.cover} alt={props.name}/>
        </div>
    )

}