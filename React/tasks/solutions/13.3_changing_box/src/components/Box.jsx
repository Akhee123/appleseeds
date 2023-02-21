import { useState, useEffect } from "react";
import './Box.css'

export default function Box() {

    const colors = ['white', 'blue', 'red', 'green', 'black'];
    const [counter, setCounter] = useState(0);
    const [round, setRound] = useState(false);

    useEffect(()=>{
        const id = setInterval(() => {
            if (counter < 4){
                setCounter(counter + 1);
            }
            else {
                setRound(true);
            }
        }, 2000);
        return () => {clearInterval(id)};
    });

    return (
        <>
            <div className="box" style={{ backgroundColor: colors[counter], borderRadius: round ? '50%' : '0%'}}></div>
        </>
    )
}