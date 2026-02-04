import React, { useState } from 'react';
import Child from './Child';

function App() {
  const [lightOn, setLightOn] = useState(false);
  function toggleLight() {
    setLightOn(!lightOn);
  }
  return (
    <div>
      <p>{lightOn ? "The room is bright" : "The room is dark"}</p>
      <Child lightOn={lightOn} toggleLight={toggleLight} />
    </div>
  );
}
export default App;