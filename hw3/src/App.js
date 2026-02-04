import React, { useState } from 'react';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('Add a task to get started!');
  const [bgColor, setBgColor] = useState('white');
  const handleAddTask=(e)=> {
    e.preventDefault();
    setTasks([...tasks, task]);
    setMessage(`Task added: ${task}!`);
    setTask('');
    setBgColor('lightblue');
  }
  return (
    <div className="container mt-5">
      <div className="card p-4 mb-4" style={{ backgroundColor: bgColor }}>
        <h3>React Task Planner..</h3>
        <form onSubmit={handleAddTask}>
          <input type="text"className="form-control mb-3"placeholder="Enter task name :"value={task} onChange={(e) => setTask(e.target.value)}/>

          <button className="btn btn-primary">Add Task</button>
        </form>
      </div>
      
    <TaskList tasks={tasks} message={message} />
    </div>
  );
}

export default App;