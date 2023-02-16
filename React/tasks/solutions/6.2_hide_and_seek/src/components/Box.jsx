import { useState } from "react";
import './Box.css';

export function Box() {
    const [color, setColor] = useState(true);
    const clickHandler = () => {
        setColor(!color);
    }

    return (
        <div className="box">
            <button onClick={clickHandler}>show/hide</button>
            {color && (<div className="box-item"></div>)}
        </div>
    )
}