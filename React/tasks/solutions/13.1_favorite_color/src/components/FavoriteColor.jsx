import { useEffect, useState } from "react";
import './FavoriteColor.css'

export default function FavoriteColor() {

const [color, setColor] = useState('blue');

useEffect(() => {
    setTimeout(() => {
        setColor('green')
    }, 1000);
}, []);

    return (
        <>
            <h1>My favorite color is {color}</h1>
            <div id="favorite-color" className="favorite-color" style={{backgroundColor: color}}></div>
        </>
    );
}