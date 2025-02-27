import React from 'react'

const AgeCheck=({age}) =>{
  return (
    <div>
         <strong>{age >= 18 ? 'Adult' : 'Minor'}</strong>
    </div>
  )
}
export default AgeCheck;