import { useState, useEffect } from 'react';
import './Keyboard.css';

const keyRows = [["`","1","2","3","4","5","6","7","8","9","0","-","="],
["q","w","e","r","t","y","u","i","o","p","[","]","\\"],
["a","s","d","f","g","h","j","k","l",";","'"],
["Shift","z","x","c","v","b","n","m",",",".","/","Shift"],
[" "]];

const shiftRows = [["~","!","@","#","$","%","^","&","*","(",")","_","+"],
["Q","W","E","R","T","Y","U","I","O","P","{","}","|"],
["A","S","D","F","G","H","J","K","L",";","'"],
["Shift","Z","X","C","V","B","N","M","<",">","?","Shift"],
[" "]];

function Keyboard(props) {
    const {
        pushedKey,
        updateKey
    } = props;
    const [pushedKeys, setPushedKeys] = useState([]);
    const [currentKeys, setRows] = useState(keyRows);

    useEffect(() => {
    function keydown(e) {
        if (e.repeat) return;
            const key = e.key;

            if (key == "Shift") {
                    setRows(shiftRows);
                    setPushedKeys([]);
                }

            updateKey(key);
            setPushedKeys(prev => {
                // avoid duplicates
                if (prev.indexOf(key) !== -1) return prev;
                return [...prev, key];
            });
        }
    
    function keyup(e) {
        const key = e.key

        if (key == "Shift"){
            setRows(keyRows);
            setPushedKeys([]);
        }

        setPushedKeys(prev => prev.filter(k => k !== key));
    }
    
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);

    return () => {
        window.removeEventListener("keydown", keydown);
        window.removeEventListener("keyup", keyup);
    };
    }, []); // Load the event listeners once on mount

    let rowKey = 0
    return(
        <div id="keyboard">
            {currentKeys.map((row) => {
                let symbolKey = 0
                return(
                    <div className='row' key={`r${rowKey++}$`}>
                        {row.map(key => {
                            let className = "key";

                            if (key == "Shift"){
                                className += " shift"
                            }else if (key == " "){
                                className += " space-bar"
                            }

                            if (pushedKeys.indexOf(key) !== -1){
                                className += " pushed"
                            }

                            return (<div className={className} key={`r${rowKey++}$k${symbolKey++}$`}>{key}</div>) //Combine symbolKey and rowKey to make a unique key for each element on the keyboard
                        })}
                    </div>
                )
            })}
        </div>
    );
}



export default Keyboard;
