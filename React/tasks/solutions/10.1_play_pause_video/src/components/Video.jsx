import video from '../assets/video.mp4'
import { useRef } from "react";

export default function Video() {
    const vidRef = useRef();

    const playHandler = () => {
        vidRef.current.play();
    };
    const pauseHandler = () => {
        vidRef.current.pause();
    };
    return (
        <>
        <video src={video} ref={vidRef}></video>
        <div>
            <button onClick={playHandler}>Play</button>
            <button onClick={pauseHandler}>Pause</button>
        </div>
        </>
    );
}