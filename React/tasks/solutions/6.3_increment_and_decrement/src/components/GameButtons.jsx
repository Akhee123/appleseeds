import './GameButtons.css'
import { useState } from "react";

export function GameButtons() {
    const [color, setColor] = useState('label-black');
    const [number, setNumber] = useState(0);

    const clickHandlerInc = () => {
        if (number < 10) {
            setNumber(number + 1);
            console.log(number);
            if (number + 1 > 0) { setColor('label-green'); }
            else if (number + 1 < 0) { setColor('label-red'); }
            else if (number + 1 === 0) { setColor('label-black'); }
        }

    };
    const clickHandlerDec = () => {
        if (number > -10) {
            setNumber(number - 1);
            console.log(number);
            if (number - 1 > 0) { setColor('label-green'); }
            else if (number - 1 < 0) { setColor('label-red'); }
            else if (number - 1 === 0) { setColor('label-black'); }
        }

    };

    return (
        <div className='container'>
            <h1 className={color}>{number}</h1>
            <div>
                <button onClick={clickHandlerInc}>Increment</button>
                <button onClick={clickHandlerDec}>Decrement</button>
            </div>
        </div>
    );
}