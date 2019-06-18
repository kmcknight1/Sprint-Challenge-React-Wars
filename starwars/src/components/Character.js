import React from "react";
import "./character.css";

const Character = props => {

    function caseWord(word) {
        const [first, ...rest] = word
        
        return [first.toUpperCase(), ...rest].join('')
      }

  return (
    <div className='character'>
    <h1>{props.character.name}</h1>
    <h3>Gender: {props.character.gender === 'n/a' ? 'Robot' : caseWord(props.character.gender)}</h3>
    <h3>Height: {props.character.height}cm</h3>
    <h3>Birth Year: {props.character.birth_year}</h3>
    <h3>Hair Color: {props.character.hair_color === 'n/a' ? 'N/A' : caseWord(props.character.hair_color)}</h3>
    <h3>Eye Color: {props.character.eye_color === 'n/a' ? 'N/A' : caseWord(props.character.eye_color)}</h3>
    </div>
  );
};

export default Character;
