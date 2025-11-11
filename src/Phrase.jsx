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

    // Reset pointer position whenever the phrase changes
    useEffect(() => {
        setPointerPos(0);
    }, [phraseIndex]);

    // Inform parent of the current pointer character
    useEffect(() => {
        setPointer(pointer);
    }, [pointer, setPointer]);

    // When pointer reaches the end of the phrase, advance to next phrase
    useEffect(() => {
        if (pointerPos >= currentPharse.length) {
            updateIndex(i => (i + 1) % phrases.length);
        }
    }, [pointerPos]);

    // Advance pointer when the user presses the expected key
    useEffect(() => {
        if (!pushedKey) return;
        if (pushedKey === pointer) {
            setPointerPos(i => i + 1);
        }
    }, [pushedKey, pointer]);

    return(
        <span id="phrase">
            <span id="typed">{typed}</span>
            <span id="pointer">{pointer}</span>
            {untyped}
            </span>
    )
}