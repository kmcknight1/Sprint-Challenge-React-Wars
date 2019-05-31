import React from "react";
import "./dog.css";

const Dog = props => {

  return (
      <>
      <div className='dog'>
      <img src={props.dog} alt="dog" />
      </div>
      </>
  );
};

export default Dog;
