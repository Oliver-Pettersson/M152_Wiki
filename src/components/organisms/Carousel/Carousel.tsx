import React, {useState} from "react";
import "./Carousel.css";
import {useSwipeable} from "react-swipeable";

const config = {
    delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: true,                      // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: {passive: true},  // options for touch listeners (*See Details*)
}

const iframeCoverStyle: React.CSSProperties = {
    zIndex: 5,
    position: "absolute"
}

export default function Carousel() {
    const handlers = useSwipeable({
        onSwiped: (eventData: any) => {
            const currentActiveImage = activeImage;
            if (eventData.dir === "Left") {
                if (currentActiveImage === 4) {
                    setActiveImage(1);
                } else {
                    setActiveImage(currentActiveImage + 1);
                }
            } else if (eventData.dir === "Right") {
                if (currentActiveImage === 1) {
                    setActiveImage(4);
                } else {
                    setActiveImage(currentActiveImage - 1);
                }
            }
            console.log("User Swiped!", eventData)
        },
        ...config,
    });

    const [activeImage, setActiveImage] = useState(1);
    return (
        <div className="container" style={{margin: "auto", marginTop: 10}} {...handlers}>
            <input
                type="radio"
                name="slider"
                id="item-1"
                checked={activeImage === 1}
            />
            <input
                type="radio"
                name="slider"
                id="item-2"
                checked={activeImage === 2}
            />
            <input
                type="radio"
                name="slider"
                id="item-3"
                checked={activeImage === 3}
            />
            <input
                type="radio"
                name="slider"
                id="item-4"
                checked={activeImage === 4}
            />
            <div className="cards">
                <label className="card" id="song-1">
                    {(activeImage === 4 || activeImage === 2) &&
                        <div onClick={() => setActiveImage(1)} className="card-img" style={iframeCoverStyle}></div>}
                    <iframe
                        className="card-img"
                        onClick={() => setActiveImage(1)}
                        src="https://www.youtube.com/embed/eneyVL3VL48"
                    />
                </label>
                <label className="card" id="song-2">
                    {(activeImage === 3 || activeImage === 1) &&
                        <div onClick={() => setActiveImage(2)} className="card-img" style={iframeCoverStyle}></div>}
                    <iframe
                        className="card-img"
                        onClick={() => setActiveImage(2)}
                        src="https://www.youtube.com/embed/KLP_Fk_aJYc"
                    />
                </label>
                <label className="card" id="song-3">
                    {(activeImage === 2 || activeImage === 4) &&
                        <div onClick={() => setActiveImage(3)} className="card-img" style={iframeCoverStyle}></div>}
                    <iframe
                        className="card-img"
                        onClick={() => setActiveImage(3)}
                        src="https://www.youtube.com/embed/9smQ2q7KPOA"
                    />
                </label>
                <label className="card" id="song-4">
                    {(activeImage === 3 || activeImage === 1) &&
                        <div onClick={() => setActiveImage(4)} className="card-img" style={iframeCoverStyle}></div>}
                    <iframe
                        className="card-img"
                        onClick={() => setActiveImage(4)}
                        src="https://www.youtube.com/embed/rf8YebDBcbY"
                    />
                </label>
            </div>
        </div>
    );
}
