import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import Editinput from "../Editinput/Editinput";

const Card = () => {
  // const smallId = uuidv4();
  // const small = smallId.slice(0, 8);
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), todoDesc: todo, isEditing: false }]);
  };
  console.log(todos);
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodoMode = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="card">
      <h1>Get things done!</h1>
      <Input
        placeholderText="What is the task"
        textButton="Add task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <Editinput
            placeholderText="Edit your task"
            textButton="Edit task"
            addTodo={addTodo}
            key={index}
          />
        ) : (
          <Todo
            todoText={todo.todoDesc}
            key={index}
            deleteTask={deleteTask}
            id={todo.id}
            editTask={editTodoMode}
          />
        )
      )}
    </div>
  );
};

export default Card;
