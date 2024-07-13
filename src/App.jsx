import React, { useState } from 'react';
import _InputTable from './_InputTable';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app">
      <h1>Pokémon Database</h1>
      <button onClick={() => setShowLogin(true)}>Login / Signup</button>
      <_InputTable showLogin={showLogin} setShowLogin={setShowLogin} />
    </div>
  );
};

export default App;
