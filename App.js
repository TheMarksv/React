import React, { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Função para adicionar uma nova tarefa
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  // Função para remover uma tarefa pelo índice
  const handleRemoveTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className='App'>
      <h1>Minha Lista de Tarefas</h1>
      <div className='task-list'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Digite uma nova tarefa'
        />
        <button onClick={handleAddTask}>Adicionar Tarefa</button>
        {tasks.map((task, index) => (
          <Task key={index} task={task} onRemove={() => handleRemoveTask(index)} />
        ))}
      </div>
    </div>
  );
}

export default App;
