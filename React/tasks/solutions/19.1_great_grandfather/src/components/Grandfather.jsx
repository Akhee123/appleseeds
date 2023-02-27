import { useState, createContext } from "react";
import Father from "./Father";

export const GiftContext = createContext();

function Grandfather() {
    const [gifts, setGifts] = useState([]);
    return (
        <>
            <h1>This is the Grandfather</h1>
            <GiftContext.Provider value={{gifts, setGifts}}>
                <Father />
            </GiftContext.Provider>
        </>
    );
}

export default Grandfather;
