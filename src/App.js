import React from 'react';
import PropTypes, { func } from "prop-types";
import Food from './food';

class App extends React.Component{
  //최초 호출 (construtor)
  constructor(props){
      super(props);
      console.log('hello');
  }
  state={
    count: 0
  }
  add=()=>{
    //setState을 호출할 때마다, 다시 랜더링 
    //직접 state를 호출하면 성능면에서 불이익 (아래 방법으로 호출하여 state 접근 지향)
    this.setState(current => ({
      count: current.count+1
    }))
  }
  minus=()=>{
    this.setState(current=>({
      count: current.count-1
    }))
  }
  //state가 업데이트 된 후, Render 이후 호출
  componentDidUpdate(){
    console.log('I just updated');
  }
  //Render 이후 호출
  componentDidMount(){
    console.log('component rendered');
  }
  //Component가 죽을 때 호출
  componentWillUnmount(){
    console.log('good bye');
  }
  render(){
    console.log('I am rendering');
    return <div>
      <h1>I am a Class {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
      </div>
    
  }
}

export default App;

/* Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number
} */

/* function App(){
  return(
    <div>
      <h1>Hello~!</h1>
      <div>
        {foodlike.map((dish)=>{
          return <Food 
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}/>
        })}
      </div>
    </div>
  );
}
 */


/* function Food({name, picture, rating}) {
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
