import { useState, useEffect } from 'react';
import './Keyboard.css';

const keyRows = [["`","1","2","3","4","5","6","7","8","9","0","-","="],
["q","w","e","r","t","y","u","i","o","p","[","]","\\ "],
["a","s","d","f","g","h","j","k","l",";","'"],
["Shift","z","x","c","v","b","n","m",",",".","/","Shift"]];

const shiftRows = [["~","!","@","#","$","%","^","&","*","(",")","_","+"],
["Q","W","E","R","T","Y","U","I","O","P","{","}","|"],
["A","S","D","F","G","H","J","K","L",";","'"],
["Shift","Z","X","C","V","B","N","M","<",">","?","Shift"]];

function Keyboard() {
    const [pushedKeys, setKeys] = useState([]);
    const [currentKeys, setRows] = useState(keyRows);

    useEffect(() => {
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    }, []); //Loads the event listeners into the window DOM element on the first render 
    
    function keydown(e) {
        if (e.repeat) return;
            const key = e.key;
            console.log(key + " was pressed!");
            if (key == "Shift"){
                    setRows(shiftRows)
                }
                const newKeys = pushedKeys;
                newKeys.push(key);
                setKeys(newKeys);
        }
    
    function keyup(e) {
        const key = e.key
        console.log(key + " was released!");
        if (key == "Shift"){
            setRows(keyRows)
        }
        const removeKey = pushedKeys;
        removeKey.splice(removeKey.indexOf(key), 1);
        setKeys(removeKey);
        console.log(pushedKeys);
    }

    let rowKey = 0
    return(
        <div id="keyboard">
            {currentKeys.map((row) => {
                let symbolKey = 0
                return(
                    <div className='row' key={`r${rowKey++}$`}>
                        {row.map(key => {
                            let className = "key";

                            if (key === "Shift"){
                                className += " shift"
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
