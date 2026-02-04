import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('Guest');

  useEffect(() => {
    console.log(`User changed to ${name}`);
  }, [name]);

  return (
    <div> 
      <h1>Welcome, {name}!</h1> 
      <button onClick={() => setName('Alice')}>Login as Alice!</button>
    </div>
  );
};
export default App;