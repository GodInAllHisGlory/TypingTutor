import { useState, useEffect } from 'react';
import './Phrase.css'

const phrases = ["Short and sweet","The quick brown fox jumps over the nothing. This isn't a classic pangram.","Hello, these are words and I'm typing them. How cool is that!?"];

export function Phrase(props) {
    const {
        pushedKey,
        setPointer,
        updateKey 
    } = props;
    const [pointerPos, setPointerPos] = useState(0);
    const [phraseIndex, updateIndex] = useState(0);
    const currentPharse = phrases[phraseIndex];
    const typed = currentPharse.slice(0, pointerPos); //Gets all the chars before the pointer
    const pointer = currentPharse[pointerPos];
    const untyped = currentPharse.slice(pointerPos + 1); //Gets all the chars after the pointer

    useEffect(() => setPointerPos(0),[phraseIndex]);
    useEffect(() => setPointer(pointer),[pointer]);
    
    if(typed.length === currentPharse.length){
        if(phraseIndex === phrases.length){
            updateIndex(0);
        }else{
            updateIndex(i => i + 1);
        }
    }

    if(pushedKey === pointer){
        setPointerPos(i => i + 1);
        updateKey("");
    }

    return(
        <span id="phrase">
            <span id="typed">{typed}</span>
            <span id="pointer">{pointer}</span>
            {untyped}
            </span>
    )
}