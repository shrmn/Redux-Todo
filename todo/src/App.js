import React from 'react';
import './App.css';

import {TodoList, TodoForm } from './components';


const App = () => {
  
  return (
    <div className="App">
      <TodoForm />
      <TodoList />    
    </div>
  );  
}

export default App;
