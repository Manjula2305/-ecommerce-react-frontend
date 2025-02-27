import React from 'react';

export default function Movie (props){
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Year: {props.year}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
};


