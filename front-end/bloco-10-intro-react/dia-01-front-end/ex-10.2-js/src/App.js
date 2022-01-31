import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const afazeres = ["Lavar roupa", "Estudar programação", "Ler um livro"];

class App extends React.Component {
  render() {
    return (

      <ul>
        {afazeres.map((toDo) => Task(toDo))}
      </ul>
    )
  }
}

export default App;
