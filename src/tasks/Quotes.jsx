import React from 'react'

export const Quotes=()=> {
    const quotes1=[
        "All Powers Within You",
        "Hard work never Fails",
        "ed"
        
    ];
    const randomIndex=quotes1[Math.floor(Math.random()*quotes1.length)];
  return (
    <>
   <p>Random Index:{randomIndex}</p>
   </>
  )
}
