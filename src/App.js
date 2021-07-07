import React from 'react';

function Food() {
  return <h1>I Like Potato</h1>;
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav='kimchi' something={true} />
      <div class='hello'></div>
    </div>
  );
}

export default App;
