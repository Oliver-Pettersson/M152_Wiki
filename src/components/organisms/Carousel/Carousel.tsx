import React, { useState } from "react";
import "./Carousel.css";
import {useSwipeable} from "react-swipeable";

const config = {
    delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: true,                      // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
}

export default function Carousel() {
    const handlers = useSwipeable({
        onSwiped: (eventData: any) => {
            const currentActiveImage = activeImage;
            if (eventData.dir === "Left") {
                if (currentActiveImage === 3) {
                    setActiveImage(1);
                } else {
                    setActiveImage(currentActiveImage + 1);
                }
            } else if (eventData.dir === "Right") {
                if (currentActiveImage === 1) {
                    setActiveImage(3);
                } else {
                    setActiveImage(currentActiveImage - 1);
                }
            }
            console.log("User Swiped!", eventData)
        },
        ...config,
    });

  const [activeImage, setActiveImage] = useState(3);
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
      <div className="cards">
        <label className="card" id="song-1">
          <img
            className="card-img"
            onClick={() => setActiveImage(1)}
            src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80"
            alt="song"
          />
        </label>
        <label className="card" id="song-2">
          <img
            className="card-img"
            onClick={() => setActiveImage(2)}
            src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="song"
          />
        </label>
        <label className="card" id="song-3">
          <img
            className="card-img"
            onClick={() => setActiveImage(3)}
            src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
            alt="song"
          />
        </label>
      </div>
    </div>
  );
}
