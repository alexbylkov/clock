import React from 'react'
import Clock from './clock/clock'

function App() {
  return (
    <div className="App">
      <Clock timeZone={2}/>
      <Clock/>
    </div>
  );
}

export default App;
