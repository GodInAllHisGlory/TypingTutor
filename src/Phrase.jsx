import './Phrase.css'

const phrases = ["The quick brown fox jumps over the nothing. This isn't a classic pangram."];

export function Phrase() {
    return(
        <span id="phrase">{phrases[0]}</span>
    )
}