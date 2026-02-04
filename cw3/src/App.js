import React, { useState } from 'react';
import './App.css';
import Header from './Header';
function App() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <Header />
      <h1>Simple React Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;