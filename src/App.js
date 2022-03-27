import React from 'react';

function App() {

  function clickA() {
    alert('Hello!');
  }
  
  return (
    <button id="button-a" onClick={clickA}>
      Click me!
    </button>
  );
}

export default App;
