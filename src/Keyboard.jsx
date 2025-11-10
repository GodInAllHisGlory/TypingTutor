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
    useEffect(() => {function keydown(e) {
    if (e.repeat) return;
    console.log(e.key + " was pressed!");
    
}

    function keyup(e) {
        console.log(e.key + " was released!");
    }

    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    }, []); //Loads the event listens onto the window DOM element on the first render 

    let rowKey = 0
    return(
        <div id="keyboard">
            {keyRows.map((row) => {
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
