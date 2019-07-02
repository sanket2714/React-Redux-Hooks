import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state={
    persons: [
    {name: "Max", age:28},
    {name:"Manu", age:29},
    {name:"steffan", age:26}
    ],
    showpersons: false
  }

  switchnameHandler=(newName)=>{
    //console.log("Was clicked!!!");
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    this.setState(
      {
        persons: [
          {name: newName, age:28},
          {name:"Manu", age:29},
          {name:"steffan", age:26}
          ]
      }
    )
  }

  changeNameHandler=(event)=>{
    //console.log("Was clicked!!!");
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    this.setState(
      {
        persons: [
          {name: "Max", age:28},
          {name: event.target.value , age:29},
          {name:"steffan", age:26}
          ]
      }
    )
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showpersons;
    this.setState({showpersons: !doesShow});
  }

  render(){

    const style={
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      cursor: 'pointer',
      padding: '8px'
    }
    
    let per =null;
    if(this.state.showpersons){
      per=(
        <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchnameHandler.bind(this,"Max!!!!")} 
        changed={this.changeNameHandler}>My Hobbie: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div> 
      ) ; 
    }

    return (
    <div className="App">
      <h1>This is my first app</h1>
      <p>Hope it will go well</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {per}
    </div>
    //React.createElement('div',{className:'App'},React.createElement('h1',null,'Let\'s begin understanding react now!!!'))
    );
  }
}

export default App;
