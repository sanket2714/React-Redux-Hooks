import React from 'react';
import Pclasses from './Person.css';
const person= (props)=>{
    return (
        <div className={Pclasses.Person}>
            <p onClick={props.click}>My name is {props.name} and i am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
        
        
        )
}
export default person;
