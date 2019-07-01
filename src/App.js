import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state={
    persons: [
    {name: "Max", age:28},
    {name:"Manu", age:29},
    {name:"steffan", age:26}
    ]
  }

  switchnameHandler=()=>{
    //console.log("Was clicked!!!");
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    this.setState(
      {
        persons: [
          {name: "Maximilian", age:28},
          {name:"Manu", age:29},
          {name:"steffan", age:26}
          ]
      }
    )
  }
  render(){
    return (
    <div className="App">
      <h1>This is my first app</h1>
      <p>Hope it will go well</p>
      <button onClick={this.switchnameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbie: Racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    //React.createElement('div',{className:'App'},React.createElement('h1',null,'Let\'s begin understanding react now!!!'))
    );
  }
}

export default App;
