import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
    {name: "Max", age:28},
    {name:"Manu", age:29},
    {name:"steffan", age:26}
    ],
    otherState: 'Some other values'
  });

  //Or we can make any number of useState calls for different objects--->

  //const [otherState, setOtherState] = useState('any type of argument can be passed here')

  //console.log(personsState , otherState);
  

  const switchnameHandler=()=>{
    //console.log("Was clicked!!!");
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    setPersonsState(
      {
        persons: [
          {name: "Maximilian", age:28},
          {name:"Manu", age:29},
          {name:"steffan", age:26}
          ],
          otherState: personsState.otherState
      }
    );
  };
    return (
    <div className="App">
      <h1>This is my first app</h1>
      <p>Gonna bang it!!!</p>
      <button onClick={switchnameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbie: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
    //React.createElement('div',{className:'App'},React.createElement('h1',null,'Let\'s begin understanding react now!!!'))
    );
  
};

export default app;
