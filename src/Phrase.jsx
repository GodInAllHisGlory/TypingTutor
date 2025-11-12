import { useState, useEffect } from 'react';
import './Phrase.css'

const phrases = ["Short and sweet","The quick brown fox jumps over the nothing. This isn't a classic pangram.","Hello, these are words and I'm typing them. How cool is that!?","Exclmation Mark ! At sign @ Octothorpe # Dollar Sign $ Percent Sign % Caret ^ Ampersand & Asterisk *","Wait—did she say, 'Meet me at 5:00 p.m.,' or 'See you tomorrow'?","My password is 9#X$2!q8, but don’t tell anyone. The total cost was $47.89.","- Dad had a bad fad. Add a dash and a pad. Sad lads had mad dads","Typing fast is fun, but typing accurately is better. Practice makes perfect every single time."];

export function Phrase(props) {
    const {
        pushedKey,
        setPointer,
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