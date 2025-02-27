import React from 'react';

export default function TodoList() {
  const tasks = [
    { name: "Buy groceries", completed: true },
    { name: "Walk the dog", completed: false },
    { name: "Clean the house", completed: true },
  ];

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.completed ? "Completed" : "Not completed"}
          </li>
        ))}
      </ul>
    </div>
  );
}
