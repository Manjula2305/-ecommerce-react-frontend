import React from 'react';

export default function NameList() {
  const names = ["Manju", "Siva", "Gowsi", "Meena"];

  return (
    <div>
      <h2>Name List</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
