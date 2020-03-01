import React from 'react';

function Food({name, image, rating}){
    return (<div>
        <h2>I love {name}</h2>
        <h4>{rating}/5.0</h4>
        <img src= {image} alt={name}/>
        </div>);
}

export default Food;