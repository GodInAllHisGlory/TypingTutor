import { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="content">
        <Keyboard />
      </div>
    </>
  )
}

export default App
