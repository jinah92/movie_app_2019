import React from 'react';
import PropTypes from "prop-types";

function Potato(){
  return(
    <div>I love~!</div>
  );
}

function App(){
  return(
    <div>
      <h1>Hello~!</h1>
      <Potato />
    </div>
  );
}

/* const foodlike = [
  {
    id : 1,
    name : "kimchi",
    image : 
    "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg",
    rating : 5.0
  },
  {
    id : 2,
    name : "ramen",
    image :
    "http://static.hubzum.zumst.com/hubzum/2019/04/19/13/694050ce163a4655bc5032ac11e0bcd5.jpg",
    rating : 4.9
  },
  {
    id : 3,
    name : "dduckbockgi",
    image :
    "http://t1.daumcdn.net/liveboard/diningcode/f4706d9efe7440afb665280ac9ca475e.JPG",
    rating : 4.8
  }
]


function Food({name, picture, rating}) {
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt={name} />
  </div>
  }

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodlike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture = {dish.image}
          rating= {dish.rating}
        />
      ))}
    </div>
  );
} */

export default App;
