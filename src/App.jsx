import { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard.jsx';
import { Phrase } from './Phrase.jsx';

function App() {
  return (
    <>
      <div id="content">
        <Phrase />
        <Keyboard />
      </div>
    </>
  )
}

export default App
