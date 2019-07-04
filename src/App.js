import React,{Component} from 'react';
import classes from'./App.css';
import Person from './Person/Person.js';

class App extends Component {
  state={
    persons: [
    {id:'asdafvac', name: "Max", age:28},
    {id:'afghfbeeg',name:"Manu", age:29},
    {id:'aaaaaaaaagf',name:"steffan", age:26}
    ],
    showpersons: false
  }

  // switchnameHandler=(newName)=>{
  //   //console.log("Was clicked!!!");
  //   //DON'T DO THIS: this.state.persons[0].name="Maximilian";
  //   this.setState(
  //     {
  //       persons: [
  //         {name: newName, age:28},
  //         {name:"Manu", age:29},
  //         {name:"steffan", age:26}
  //         ]
  //     }
  //   )
  // }

  changeNameHandler=(event,id)=>{
    //console.log("Was clicked!!!");
    //DON'T DO THIS: this.state.persons[0].name="Maximilian";
    const personInd=this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    
    const person= {
      ...this.state.persons[personInd]
    };

    person.name = event.target.value;
    const persons=[...this.state.persons]
    persons[personInd] =person;
    this.setState(
      {
        persons: persons
          // [
          // {name: "Max", age:28},
          // {name: event.target.value , age:29},
          // {name:"steffan", age:26}
          // ]
      }
    )
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showpersons;
    this.setState({showpersons: !doesShow});
  }

  deletePersonhandler =(personIndex)=>{
    //const pers = this.state.persons.slice(); //we should make a copy of array so that orignal array might not be affected by using slice()
    //or by using spread operator -> es6 feature 
    const pers=[...this.state.persons] //we should update state in an immutable fashion
    pers.splice(personIndex,1);
    this.setState({persons:pers})
  } 

  render(){

    // const style={
    //   backgroundColor: 'green',
    //   color:'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   cursor: 'pointer',
    //   padding: '8px'
    // }
    let btncls='';
    let per =null;
    if(this.state.showpersons){
      per=(
        <div>

      {/* by below feature we can output a list by mapping an array into an array of jsx elements*/}
          {this.state.persons.map((person,index)=>{
              return <Person 
              click={()=>this.deletePersonhandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.changeNameHandler(event,person.id)}
              />
          })}
        {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchnameHandler.bind(this,"Max!!!!")} 
        changed={this.changeNameHandler}>My Hobbie: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/> */}
      </div> 
      ) ; 
      btncls=classes.red;
    }
    const assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold);
    }
    return (
    <div className={classes.App}>
      <h1>This is my first app</h1>
      <p className={assignedClasses.join(' ')}>Hope it will go well</p>
      <button 
      className={btncls}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {per}
    </div>
    //React.createElement('div',{className:'App'},React.createElement('h1',null,'Let\'s begin understanding react now!!!'))
    );
  }
}

export default App;
