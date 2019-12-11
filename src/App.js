import React from 'react';

function Food({name, picture}) {
return <div>
    <h2>I like {name}</h2>
    <img src = {picture} />
</div>
}


const foodlike = [
  {
    name : "kimchi",
    image : 
    "https://cdn.crowdpic.net/detail-thumb/thumb_d_CDC14868821FF3F20C77BC8BC15E6355.jpg"
  },
  {
    name : "ramen",
    image :
    "http://static.hubzum.zumst.com/hubzum/2019/04/19/13/694050ce163a4655bc5032ac11e0bcd5.jpg"
  },
  {
    name : "dduckbockgi",
    image :
    "http://t1.daumcdn.net/liveboard/diningcode/f4706d9efe7440afb665280ac9ca475e.JPG"
  }
]

function renderFood() {
  

}


function App() {
  return  <div>
      {foodlike.map(dish => (
        <Food name={dish.name} picture = {dish.image} />
      ))}
    </div>
}

export default App;
