import { useState } from "react";

export function IncButton() {
    const [number, setNumber] = useState(0);
    const clickHandler = () => {
        setNumber(number + 1);
        console.log('clicked!');
    }
    return (
        <>
            <button onClick={clickHandler}>Increment</button>
            <p>{number}</p>
        </>
    );
}