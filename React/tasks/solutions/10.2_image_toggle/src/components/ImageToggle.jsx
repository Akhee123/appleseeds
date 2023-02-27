import { useRef } from "react";
import img1 from '../img/img1.jpg';
import img1Mod from '../img/img1-modified.jpg';
import img2 from '../img/img2.jpg';
import img2Mod from '../img/img2-modified.jpg';

export default function ImageToggle() {
    const img1Ref = useRef();
    const img2Ref = useRef();

    const mouseOverHandler = function (imgRef, img) {
        imgRef.current.src = img;
    }

    const mouseOutHandler = function (imgRef, img) {
        imgRef.current.src = img;
    }

    return (
        <>
            <div className="images">
                <img src={img1Mod} ref={img1Ref} onMouseOver={() => { mouseOverHandler(img1Ref, img1) }} onMouseOut={() => { mouseOutHandler(img1Ref, img1Mod) }} />
                <img src={img2Mod} ref={img2Ref} onMouseOver={() => { mouseOverHandler(img2Ref, img2) }} onMouseOut={() => { mouseOutHandler(img2Ref, img2Mod) }} />
            </div>
        </>
    );
}