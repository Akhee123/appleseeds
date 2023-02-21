import { useEffect, useState } from "react";
import './Box.css'

export default function Box() {

    const [divClass, setDivClass] = useState('box')

    useEffect(() => {
        setTimeout(() => {
            setDivClass('disappear');
        }, 4000);
    }, [])

    return (
        <>
            <div className={divClass}></div>
        </>
    )
}