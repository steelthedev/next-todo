"use client"

import { useState } from "react";
import axiosInstance from "../config/axios";

const Todo = () => {
    const [title, setTitle] = useState<string>('');

    const addTodo = async () =>{
        if (!title.trim()) return;
        
    }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Todo App</h1>
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
          />
          <button
            
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded-r-lg"
          >
            Add Todo
          </button>
        </div>
        {/* <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-2 border-b border-gray-200"
            >
              <span
                onClick={() => toggleTodo(todo.id, !todo.completed)}
                className={`flex-1 cursor-pointer ${
                  todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  )
}

export default Todo