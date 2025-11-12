import { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard.jsx';
import { Phrase } from './Phrase.jsx';

function App() {
  const [pointer, setPointer] = useState("");
  const [pushedKey, updateKey] = useState("");

  return (
    <>
      <div id="content">
        <Phrase 
        pointer = {pointer}
        pushedKey = {pushedKey}
        setPointer = {setPointer}
        />
        <Keyboard 
        pointer = {pointer}
        updateKey = {updateKey}
        />
      </div>
    </>
  )
}

export default App
