import React from 'react';

function App() {

  function clickA() {
    alert('Hello!');
  }
  
  return (
    <button id="button-a" onClick={clickA}>
      clickA
    </button>
  );
}

export default App;
