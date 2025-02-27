import React, { useState, useEffect } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setNumber(Math.random()); 
  }, []);

  return <div>Random Number: {number}</div>;
};

export default RandomNumber;
