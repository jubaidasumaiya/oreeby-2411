import React from 'react';
import { ContextApi } from './components/ContextApi'; // <--- named export, curly braces
import Home from './pages/Home';

function App() {
  return (
    <ContextApi>
      <Home />
    </ContextApi>
  )
}

export default App;