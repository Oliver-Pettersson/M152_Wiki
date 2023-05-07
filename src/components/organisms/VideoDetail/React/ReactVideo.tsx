import { Typography } from "@mui/material";
import Fade from "react-reveal/Fade";

import React from "react";
import StoryBoardItem from "../../../molecules/StoryBoardItem/StoryBoardItem";
import "./ReactVideo.css";
import AnimatedPage from "../../../pages/AnimatedPage";

export default function ReactVideo() {
  return (
    <AnimatedPage>
      <div className="react-page-container w-full">
        <div className="title-wrapper">
          <Fade right>
            <Typography variant="h1" className="title">
              Einführung in React
            </Typography>
            <div className="react-line" />
          </Fade>
        </div>

        <div className="video-description">
          <p className="video-description-text">
            React ist ein beliebtes Framework für die Erstellung von
            Benutzeroberflächen. Es ist bekannt für seine komponentenbasierte
            Architektur und seine Fähigkeit, komplexe Benutzeroberflächen zu
            handhaben. Einige der Applikationen, die React verwenden, sind
            Facebook, Instagram und Airbnb.
          </p>
        </div>

        <div className="main-content grid lg:grid-cols-2 md:grid-cols-1 ">
          <div className="react-video">
            <iframe
              className="video-thumbnail "
              src="https://www.youtube.com/embed/9smQ2q7KPOA"
              title="Einführung in React"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div>
            <Fade bottom>
              <Typography className="video-thumbnail-description row-span-2 col-span-1">
                In diesem Video wird dir erkl&auml;rt was React ist und warum
                auch du React verwendet solltest. Zusaetzlich gehen wir darauf
                ein wie du die verschiedenen Funktionalitäten von Reacht
                verwendest wie useEffect-Hooks. Ebenfalls werden wir uns
                anschauen, wie das re-rendering funktioniert.
              </Typography>
            </Fade>
          </div>
        </div>

        <div className="react-divider"></div>

        {/* Story boards below  */}
        <Fade left>
          <div className="video-production-title">
            <Typography variant="h2"> Videoproduktion </Typography>
          </div>
          <div className="small-line" />
        </Fade>
        <div className="mb-20"></div>
        <div className="storyboard-title-wrapper">
          <Typography variant="h3">3 Frames Methode</Typography>
        </div>
        <object
          data="/image/videos/react/3-Frames-React.pdf"
          width="100%"
          height="800px"
        ></object>

        <div className="react-divider"></div>
        <div className="storyboard-title-wrapper">
          <Typography variant="h3">Story Board</Typography>
        </div>

        <object
          data="/image/videos/react/Storyboard-React.pdf"
          width="100%"
          height="800px"
        ></object>
      </div>
    </AnimatedPage>
  );
}
