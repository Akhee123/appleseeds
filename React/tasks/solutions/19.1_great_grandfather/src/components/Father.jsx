import { GiftContext } from "./Grandfather";
import { useContext, useEffect } from "react";
import Son from "./Son"

function Father() {

    const context = useContext(GiftContext);
    useEffect(() => {
        context.setGifts(['cars', 'dolls', 'lego']);
    },[]);

    return (
        <>
        <h2>This is the Father</h2>
            <Son />
        </>
    );
}

export default Father;
