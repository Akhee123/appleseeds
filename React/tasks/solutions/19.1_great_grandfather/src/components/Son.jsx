import { GiftContext } from "./Grandfather";
import { useContext } from "react";

function Son() {

    const context = useContext(GiftContext);
    return (
        <>
            <h3>This is the Son</h3>
            <ul>
                {context.gifts.map((gift, index) =>{
                    return <li key={index}>{gift}</li>
                })}
            </ul>
        </>
    );
}

export default Son;
