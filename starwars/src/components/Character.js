import React from "react";
import "./characters.css";

const Character = props => {
  console.log(props.character);

  return (
    <div className='character'>
    <h1>{props.character.name}</h1>
    <h3>Gender: {props.character.gender === 'n/a' ? 'robot' : props.character.gender}</h3>
    </div>
  );
};

export default Character;
