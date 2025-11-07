import { useState } from 'react';
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

    return(
        <div id="keyboard">
            {keyRows.map((row) => {
                return(
                    <div className='row'>
                        {row.map(key =>{
                            return <div className='key'>{key}</div>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default Keyboard;
