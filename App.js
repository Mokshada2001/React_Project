import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import React, { useState } from 'react';
import { useEffect } from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete of todo.", todo);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {

    console.log("I am adding this Todo", title, desc)
    let sno = todos(todos.length - 1).sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }), [todos]
    

  }

  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <BrowserRouter>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route path="/" element={
          <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <About />
    </BrowserRouter>
  );
}

export default App;
