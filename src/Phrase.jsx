import { useState } from 'react';
import './Phrase.css'

const phrases = ["The quick brown fox jumps over the nothing. This isn't a classic pangram."];

export function Phrase() {
    const [pointerPos, setPointerPos] = useState(0);
    const currentPharse = phrases[0];
    const typed = currentPharse.slice(0, pointerPos); //Gets all the chars before the pointer
    const pointer = currentPharse[pointerPos];
    const untyped = currentPharse.slice(pointerPos + 1); //Gets all the chars after the pointer

    return(
        <span id="phrase">
            <span id="typed">{typed}</span>
            <span id="pointer">{pointer}</span>
            {untyped}
            </span>
    )
}