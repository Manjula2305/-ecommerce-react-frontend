import React from 'react';

function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
  );
}

export default function ShoppingList() {
  const items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 5 },
  ];

  return (
    <div>
      <h1>Shopping List</h1>
      <ItemList items={items} />
    </div>
  );
}
